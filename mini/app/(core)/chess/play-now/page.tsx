'use client';

import React, { useEffect, useState } from 'react';
import { TextH, Navbar, ChessGame, ModalWrapper, AppButton, Spinner, TextP } from '@/comps';
import { useRouter } from 'next/navigation';
import { ContractFn, ContractReads } from '@/web3';
import { useAccount } from 'wagmi';
import { toast } from 'sonner';

export default function PlayNowPage() {
  const [waitingPlayer, setWaitingPlayer] = useState<'NONE' | 'WAIT' | 'NOTE'>('NONE');
  const router = useRouter();
  ContractReads.useGetBalance(0);
  const { address } = useAccount();

  useEffect(() => {
    setWaitingPlayer('NOTE');
    return () => {};
  }, []);

  return (
    <div>
      <Navbar title={'Two Random People'} onIconClick={() => {}} isBack />
      <ChessGame />
      {waitingPlayer === 'NOTE' && (
        <ModalWrapper>
          <div>
            <TextH className="mb-2">Note</TextH>
            <TextP className="mb-2">You need to stake $2 to participate in this game.</TextP>
            <div className="w-full flex items-center justify-around">
              <AppButton variant={'outline'} className="w-[40%]" onClick={() => router.back()}>
                Cancel
              </AppButton>
              <AppButton
                className="w-[40%]"
                onClick={async () => {
                  try {
                    await ContractFn.joinGame({
                      userAddress: address!,
                      stakeAmount: 2,
                    });
                    setWaitingPlayer('WAIT');
                    toast.success('Staked successfully');
                  } catch (error) {}
                }}
              >
                Next
              </AppButton>
            </div>
          </div>
        </ModalWrapper>
      )}
      {waitingPlayer === 'WAIT' && (
        <ModalWrapper>
          <div>
            <TextH className="mb-2">Waiting for a second player to join</TextH>
            <TextP className="mb-2">You have already staked $2</TextP>
            <div className="w-full flex justify-center my-4">
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
