import { closeMainWindow, open, showToast, Toast } from '@vicinae/api'

import { makeChatLink } from './chat-link'

export async function launchChat(prompt: string, temporary?: boolean): Promise<void> {
  try {
    const url = makeChatLink(prompt, temporary)
    await closeMainWindow()
    await open(url)
  } catch (error) {
    await showToast({
      style: Toast.Style.Failure,
      title: 'Could not open Cherry Studio',
      message: error instanceof Error ? error.message : String(error)
    })
  }
}
