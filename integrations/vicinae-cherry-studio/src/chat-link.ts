export function makeChatLink(rawPrompt: string, temporary?: boolean): string {
  const prompt = rawPrompt.trim().replace(/^!(?:chat|tempchat|savedchat)(?:\s+|$)/, '').trim()
  if (!prompt) throw new Error('Enter a prompt for Cherry Studio.')
  if (prompt.length > 16_000) throw new Error('The prompt must be at most 16,000 characters.')

  const url = new URL('cherrystudio://chat/new')
  url.searchParams.set('prompt', prompt)
  if (temporary !== undefined) url.searchParams.set('temporary', String(temporary))
  url.searchParams.set('submit', 'true')
  return url.toString()
}
