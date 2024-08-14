import { cn, TextP } from '@repo/ui';
import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

export function ChatSection() {
  const [message, setMessage] = useState<string>();
  const onSend = () => {};

  return (
    <div className={``}>
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

      <div className="w-full mt-[20px] flex flex-row items-center">
        <input
          type="text"
          className="w-full p-2 outline-primary rounded-lg"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <div
          onClick={onSend}
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
