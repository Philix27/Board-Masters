'use client';

import React, { useEffect, useState } from 'react';
import { MdScoreboard } from 'react-icons/md';
import { TextH, Navbar, ChessGame, ModalWrapper, AppInput, AppButton, InputText, Spinner, TextP } from '@/comps';
import { useRouter } from 'next/navigation';

export default function PlayNowPage() {
  const [waitingPlayer, setWaitingPlayer] = useState<'NONE' | 'WAIT'>('NONE');
  const router = useRouter();

  useEffect(() => {
    setWaitingPlayer('WAIT');
    return () => {};
  }, []);

  return (
    <div>
      <Navbar title={'Two Random People'} onIconClick={() => {}} isBack />
      <ChessGame />
      {waitingPlayer === 'WAIT' && (
        <ModalWrapper>
          <div>
            <TextH className="mb-2">Waiting for a second player to join</TextH>
            <div className="w-full flex justify-center my-5">
              <Spinner />
            </div>
            <div className="w-full flex justify-center">
              <AppButton variant={'outline'} className="w-[75%]" onClick={() => router.back()}>
                Cancel
              </AppButton>
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}
