import { ethers } from 'ethers';
import { XmtpClient } from './xmtpClient';
import { FramePostPayload, FramesClient } from '@xmtp/frames-client';

async function frameClient(signer: ethers.HDNodeWallet) {
  const frameUrl = 'https://www.myframe.xyz';
  const framePostUrl = 'https://www.myframe.xyz/api/post';

  const framesClient = new FramesClient(await XmtpClient(signer));

  const payload: FramePostPayload = await signFrameAction({
    frameUrl,
    buttonIndex: 2,
    conversationTopic: '/xmtp/0/123',
    participantAccountAddresses: ['abc', 'xyz'],
    address: '0x...',
  });

  // Read data from a frame
  const frameMetadata = await framesClient.proxy.readMetadata(frameUrl);

  // If the button action type was `post`
  const updatedFrameMetadata = await framesClient.proxy.post(framePostUrl, payload);
  // If the button action type was `post_redirect`
  const { redirectedTo } = await framesClient.proxy.postRedirect(framePostUrl, payload);
  // If the button action type was `postTransaction`
  const transactionInfo = await framesClient.proxy.postTransaction(framePostUrl, payload);

  const imageUrl = framesClient.proxy.mediaUrl(frameMetadata.extractedTags['fc:frame:image']);

  return { frameMetadata, updatedFrameMetadata, redirectedTo, transactionInfo, imageUrl };
}

//fc:frame:post_url

// Get a proxied image URL, which you can use directly in an <image> tag

// Handle a click to button 2 from a conversation with topic "/xmtp/0/123" and participant addresses "abc" and "xyz"
