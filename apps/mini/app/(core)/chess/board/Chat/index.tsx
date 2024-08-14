import { cn, TextP } from '@repo/ui';
import React from 'react';
import { IoSend } from 'react-icons/io5';

export function ChatSection() {
  return (
    <div className={`h-[500px] overflow-scroll  relative `}>
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={false} />
      <MessageBubble message="Hello message from player 2" forMe={true} />
      <MessageBubble message="Hello message from player 2" forMe={false} />

      <div className="w-full mb-[60px] mt-[20px] flex flex-row items-center">
        <input type="text" className="w-full p-2 outline-primary rounded-lg" />
        <div
          className={`
            w-[50px] h-[40px] bg-card 
            rounded-[25px] ml-1
            flex items-center justify-center 
        `}
        >
          <IoSend className="text-primary" size={15} />
        </div>
      </div>
    </div>
  );
}

function MessageBubble(props: { message: string; forMe: boolean }) {
  return (
    <div className="w-full mb-[6px] flex items-center justify-between">
      {props.forMe || <div />}
      <div className={cn('py-2 px-3 rounded-xl w-fit', props.forMe ? 'bg-secondary' : 'bg-card')}>
        <TextP className="text-sm">{props.message}</TextP>
      </div>
      {props.forMe && <div />}
    </div>
  );
}
