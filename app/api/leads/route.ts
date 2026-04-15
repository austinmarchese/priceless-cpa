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

  if (!webhookUrl) {
    console.error('GHL_WEBHOOK_URL is not set')
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 })
  }

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

  try {
    // 1. Send to GHL webhook
    const ghlResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        phone: phone || '',
        revenue: revenue || '',
        source: utmSource,
        medium: utmMedium,
        campaign: utmCampaign,
        content: content || '',
        tags,
      }),
    })

    if (!ghlResponse.ok) {
      console.error('GHL webhook failed:', ghlResponse.status, await ghlResponse.text())
      return NextResponse.json({ error: 'Webhook delivery failed' }, { status: 502 })
    }

    // 2. Send Slack notification
    if (slackWebhookUrl) {
      const contactSearchUrl = `https://app.gohighlevel.com/v2/location/${GHL_LOCATION_ID}/contacts/smart_list`
      const campaignLine = utmCampaign ? `*Campaign:*\n${utmCampaign}` : '*Campaign:*\nN/A'

      await fetch(slackWebhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: 'New Organic Lead',
                emoji: true,
              },
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
              ],
            },
            {
              type: 'actions',
              elements: [
                {
                  type: 'button',
                  text: { type: 'plain_text', text: 'View in GHL' },
                  url: contactSearchUrl,
                },
              ],
            },
          ],
        }),
      }).catch((err) => {
        console.error('Slack notification failed:', err)
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('GHL webhook error:', error)
    return NextResponse.json({ error: 'Failed to send to GHL' }, { status: 500 })
  }
}
