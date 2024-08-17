import { Client, Stream } from '@xmtp/xmtp-js';
import { ethers } from 'ethers';
import { useEffect } from 'react';
import { string } from 'zod';

export const XmtpClient = async (signer: ethers.HDNodeWallet) => {
  const xmtpClient = await Client.create(signer, {
    env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
    persistConversations: true,
  });


  return xmtpClient;
};

async function getMsgStream(signer: ethers.HDNodeWallet, msgWith: string) {
  const messages: string[] = [];
  const xmtp = await XmtpClient(signer);
  const conversation = await xmtp.conversations.newConversation(msgWith);

  for await (const message of await conversation.streamMessages()) {
    if (message.senderAddress === xmtp.address) {
      // This message was sent from me
      continue;
    }
    messages.push(message.content!);
    // console.log(`New message from ${message.senderAddress}: ${message.content}`);
  }

  return messages;
}

async function stopLoop(signer: ethers.HDNodeWallet) {
  const xmtp = await XmtpClient(signer);
  //   const stream = new Stream(xmtp, ["*"], {});
  //   stream.return();
}

export const useMsgStream = async (signer: ethers.HDNodeWallet, msgWith: string) => {
  useEffect(() => {
    getMsgStream(signer, msgWith);
    return () => {
      stopLoop(signer);
    };
  }, []);
};

export async function getAllConversations(signer: ethers.HDNodeWallet) {
  const xmtp = await XmtpClient(signer);

  const allConversations = await xmtp.conversations.list();
  return allConversations;
}

export async function sendConversations(signer: ethers.HDNodeWallet, toAddress: string, msg: string) {
  const xmtp = await XmtpClient(signer);
  try {
    const conversation = await xmtp.conversations.newConversation(toAddress);
    await conversation.send(msg);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getChatMessages(signer: ethers.HDNodeWallet, toAddress: string) {
  const xmtp = await XmtpClient(signer);

  const conversation = await xmtp.conversations.newConversation(toAddress);
  const messages = await conversation.messages();
  return messages;
}

export async function sendBroadcastMsg(signer: ethers.HDNodeWallet, msg: string, addresses: string[]) {
  const xmtp = await XmtpClient(signer);

  const broadcasts_canMessage = await Client.canMessage(addresses);

  for (let i = 0; i < addresses.length; i++) {
    const wallet = addresses[i];

    if (broadcasts_canMessage[i]) {
      const conversation = await xmtp.conversations.newConversation(wallet);
      const sent = await conversation.send('gm');
    }
  }
}
