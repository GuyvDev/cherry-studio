import type { LaunchProps } from '@vicinae/api'

import { launchChat } from './launch-chat'

export default async function TemporaryChat(props: LaunchProps<{ arguments: { prompt: string } }>): Promise<void> {
  await launchChat(props.arguments.prompt, true)
}
