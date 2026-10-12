import assert from 'node:assert/strict'
import test from 'node:test'

import { makeChatLink } from '../src/chat-link.ts'

test('saved launcher requests submit immediately and strip the command alias', () => {
  const url = new URL(makeChatLink('!chat where is paris', false))
  assert.equal(url.protocol, 'cherrystudio:')
  assert.equal(url.hostname, 'chat')
  assert.equal(url.pathname, '/new')
  assert.equal(url.searchParams.get('prompt'), 'where is paris')
  assert.equal(url.searchParams.get('temporary'), 'false')
  assert.equal(url.searchParams.get('submit'), 'true')
})

test('temporary prompts preserve Unicode and cannot inject additional URL parameters', () => {
  const prompt = 'איפה פריז? مرحبا\n&temporary=false#fragment + % $(touch /tmp/test)'
  const url = new URL(makeChatLink(prompt, true))
  assert.equal(url.searchParams.get('prompt'), prompt)
  assert.equal(url.searchParams.get('temporary'), 'true')
  assert.equal(url.hash, '')
  assert.equal(url.searchParams.size, 3)
})

test('rejects empty commands and prompts outside the Cherry protocol limit', () => {
  assert.throws(() => makeChatLink(' !chat ', false), /Enter a prompt/)
  assert.throws(() => makeChatLink('a'.repeat(16_001), false), /16,000/)
})
