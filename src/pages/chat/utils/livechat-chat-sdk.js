import SDK from '@livechat/chat-sdk';

// Initialize ChatSDK instance
export const ChatSDK = new SDK({
  debug: true
});

/**
 * Returns list of last 10 archived chats
 * Based on: https://developers.livechat.com/docs/messaging/agent-chat-api/rtm-reference/#get-archives
 */
export const getArchives = () =>
  ChatSDK.methodFactory({
    action: 'list_archives',
    payload: {
      pagination: {
        limit: 10
      }
    }
  });

/**
 * Returns threads that the current Agent has access to in a given chat.
 * @param {string} chat_id
 * @param {string[]} thread_ids
 * Based on: https://developers.livechat.com/docs/messaging/agent-chat-api/rtm-reference/#get-chat-threads
 */
export const getChat = (chat_id, thread_id) =>
  ChatSDK.methodFactory({
    action: 'get_chat',
    payload: { chat_id, thread_id }
  });

/**
 * Returns threads that the current Agent has access to in a given chat.
 * Based on: https://developers.livechat.com/docs/messaging/agent-chat-api/rtm-reference/#get-chat-threads
 */
export const getChatsList = () =>
  ChatSDK.methodFactory({
    action: 'list_chats'
  });

/**
 * Move chat from queue by add user
 * @param {string} chat_id
 * @param agent_id
 * Based on: https://developers.livechat.com/docs/messaging/agent-chat-api/rtm-reference#add-user-to-chat
 */
export const pickFromQueue = (chat_id, agent_id) =>
  ChatSDK.methodFactory({
    action: 'transfer_chat',
    payload: {
      id: chat_id,
      target: {
        type: 'agent',
        ids: [agent_id]
      },
      ignore_requester_presence: true
    }
  });

export const deactivateChat = (chat_id) =>
  ChatSDK.methodFactory({
    action: 'deactivate_chat',
    payload: {
      id: chat_id,
      ignore_requester_presence: true
    }
  });

export const listAgentToTransfer = (chat_id) =>
  ChatSDK.methodFactory({
    action: 'list_agents_for_transfer',
    payload: {
      chat_id: chat_id
    }
  });
