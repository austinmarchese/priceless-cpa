import { NextRequest, NextResponse } from 'next/server'

const GHL_LOCATION_ID = 'w9nlFqFeNgvMxlmA50dr'

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { name, email, phone, revenue, source, medium, campaign, content } = body

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL

  // Split name into first/last for GHL field mapping
  const nameParts = name.trim().split(/\s+/)
  const firstName = nameParts[0] || ''
  const lastName = nameParts.slice(1).join(' ') || ''

  const utmSource = source || 'organic'
  const utmMedium = medium || 'social'
  const utmCampaign = campaign || ''

  // Build tags from UTM params
  const tags = [`source:${utmSource}`]
  if (utmCampaign) tags.push(`campaign:${utmCampaign}`)

  const qualified = ['$150K - $500K', '$500K - $1M', '$1M - $3M', '$3M+'].includes(revenue || '')
  tags.push(qualified ? 'qualified' : 'unqualified')

  const ghlResult = { ok: false, status: 0, error: '' }
  const slackResult = { ok: false, status: 0, error: '' }

  // 1. GHL webhook (create contact)
  if (!webhookUrl) {
    ghlResult.error = 'GHL_WEBHOOK_URL not configured'
    console.error('[leads] GHL_WEBHOOK_URL is not set')
  } else {
    try {
      const ghlResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`.trim(),
          email,
          phone: phone || '',
          revenue: revenue || '',
          qualified: qualified ? 'yes' : 'no',
          source: utmSource,
          medium: utmMedium,
          campaign: utmCampaign,
          content: content || '',
          tags,
        }),
      })
      ghlResult.ok = ghlResponse.ok
      ghlResult.status = ghlResponse.status
      if (!ghlResponse.ok) {
        const text = await ghlResponse.text()
        ghlResult.error = text
        console.error('[leads] GHL webhook failed:', ghlResponse.status, text)
      } else {
        console.log('[leads] GHL webhook delivered for', email)
      }
    } catch (err) {
      ghlResult.error = err instanceof Error ? err.message : String(err)
      console.error('[leads] GHL webhook exception:', err)
    }
  }

  // 2. Slack notification (fires regardless of GHL outcome so we never lose a lead)
  if (!slackWebhookUrl) {
    slackResult.error = 'SLACK_WEBHOOK_URL not configured'
    console.error('[leads] SLACK_WEBHOOK_URL is not set')
  } else {
    try {
      const contactSearchUrl = `https://app.gohighlevel.com/v2/location/${GHL_LOCATION_ID}/contacts`
      const campaignLine = utmCampaign ? `*Campaign:*\n${utmCampaign}` : '*Campaign:*\nN/A'
      const headerText = qualified ? 'New Qualified Lead (5 Tax Traps)' : 'New Organic Lead (5 Tax Traps)'

      const slackResponse = await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: { type: 'plain_text', text: headerText, emoji: true },
            },
            {
              type: 'section',
              fields: [
                { type: 'mrkdwn', text: `*Name:*\n${firstName} ${lastName}` },
                { type: 'mrkdwn', text: `*Email:*\n${email}` },
                { type: 'mrkdwn', text: `*Phone:*\n${phone || 'N/A'}` },
                { type: 'mrkdwn', text: `*Revenue:*\n${revenue || 'N/A'}` },
                { type: 'mrkdwn', text: `*Source:*\n${utmSource} / ${utmMedium}` },
                { type: 'mrkdwn', text: campaignLine },
                { type: 'mrkdwn', text: `*Qualified:*\n${qualified ? 'Yes (book incoming)' : 'No (under $150K)'}` },
                { type: 'mrkdwn', text: `*GHL webhook:*\n${ghlResult.ok ? 'Delivered' : `Failed (${ghlResult.status || 'no-status'})`}` },
              ],
            },
            {
              type: 'actions',
              elements: [
                { type: 'button', text: { type: 'plain_text', text: 'View in GHL' }, url: contactSearchUrl },
              ],
            },
          ],
        }),
      })
      slackResult.ok = slackResponse.ok
      slackResult.status = slackResponse.status
      if (!slackResponse.ok) {
        const text = await slackResponse.text()
        slackResult.error = text
        console.error('[leads] Slack notification failed:', slackResponse.status, text)
      } else {
        console.log('[leads] Slack notification delivered for', email)
      }
    } catch (err) {
      slackResult.error = err instanceof Error ? err.message : String(err)
      console.error('[leads] Slack exception:', err)
    }
  }

  // Return 200 as long as at least one channel succeeded. We never want to block reveal.
  const overallOk = ghlResult.ok || slackResult.ok
  return NextResponse.json(
    { success: overallOk, ghl: ghlResult, slack: slackResult },
    { status: overallOk ? 200 : 502 },
  )
}
