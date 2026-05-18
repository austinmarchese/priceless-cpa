import { PostHog } from 'posthog-node'

let client: PostHog | null = null

export function getPostHogClient(): PostHog | null {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST
  if (!key || !host) return null

  if (!client) {
    client = new PostHog(key, { host })
  }
  return client
}

export function trackEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, unknown>
) {
  const ph = getPostHogClient()
  if (!ph) return
  ph.capture({ distinctId, event, properties })
}

export function identifyUser(
  distinctId: string,
  properties: Record<string, unknown>
) {
  const ph = getPostHogClient()
  if (!ph) return
  ph.identify({ distinctId, properties })
}
