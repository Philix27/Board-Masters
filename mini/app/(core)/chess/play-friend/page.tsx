'use client';
import React, { useEffect, useState } from 'react';
import { MdScoreboard } from 'react-icons/md';
import { TextH, Navbar, ChessGame, ModalWrapper, AppInput, AppButton, InputText, Spinner, TextP } from '@/comps';
import { useRouter } from 'next/navigation';

export default function PlayFriendPage() {
  const [inviteFriend, setInviteFriend] = useState<'NONE' | 'SEND' | 'WAIT'>('NONE');
  const router = useRouter();

  useEffect(() => {
    setInviteFriend('SEND');
    return () => {};
  }, []);

  return (
    <div>
      <Navbar title={'Friends Play'} icon={MdScoreboard} isBack />
      <ChessGame />
      {inviteFriend === 'SEND' && (
        <ModalWrapper>
          <div>
            <TextH className="mb-2">Enter friend's wallet address or Lens username</TextH>
            <InputText placeH={'Enter wallet address or username'} className="mb-4" />
            <div className="w-full flex justify-center">
              <AppButton className="w-[75%]" onClick={() => setInviteFriend('WAIT')}>
                Send
              </AppButton>
            </div>
          </div>
        </ModalWrapper>
      )}
      {inviteFriend === 'WAIT' && (
        <ModalWrapper>
          <div>
            <TextH className="mb-2">Waiting for friend to join</TextH>
            <TextP>0x673662725232</TextP>
            <div className="w-full flex justify-center my-5">
              <Spinner />
            </div>
            <div className="w-full flex items-center justify-around">
              <AppButton className="w-[40%]" onClick={() => router.back()} variant={'outline'}>
                Cancel
              </AppButton>
              <AppButton className="w-[40%]" onClick={() => setInviteFriend('SEND')}>
                Send again
              </AppButton>
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}
