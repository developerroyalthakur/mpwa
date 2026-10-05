import { callHookUntilHandled } from '../pluginLoader.js';

const IncomingMessage = async (incomingData, socket, userIdDB, waToken, io) => {
  try {
    if (!incomingData?.messages?.length) return;
    const message = incomingData.messages[0];
    const result = await callHookUntilHandled('incomingMessage', 'onIncomingMessage', {
      incomingData,
      socket,
      userIdDB,
      waToken,
      io,
      message
    });
    return result;
  } catch (error) {
    console.error('IncomingMessage error:', error);
    return false;
  }
};

function clearChatSession() {}

export { IncomingMessage, clearChatSession };
