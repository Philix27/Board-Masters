'use client';

import React from 'react';

import { CardsSection, HeroSection, JumbutronSection, HeroWithImg } from '../_comps';
import { AppImg, AppPages } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { cardData } from './cards';
import { useAccount, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi';
import { useRouter } from 'next/navigation';
import { injected } from 'wagmi/connectors';

export function HomeSection() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const router = useRouter();
  return (
    <div>
      <HeroWithImg img={'/fx1.png'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary"> Chess </span> and
          <span className="text-primary"> Checkers</span>
        </TextH>
      </HeroWithImg>
      <div className="md:hidden my-5 flex flex-col items-center justify-center">
        {isConnected ? (
          <AppButton
            className="w-fit"
            onClick={() => {
              router.push(AppPages.chess.chess);
            }}
          >
            Play now
          </AppButton>
        ) : (
          <AppButton className="w-fit" onClick={() => connect({ connector: injected() })}>
           Connect
          </AppButton>
        )}
      </div>
      <div className="hidden md:block">
        <HeroSection img={AppImg.chain} title={'Play chess with friends a'} subtitle={``} />
      </div>
      <JumbutronSection
        title={'Fun time'}
        subtitle="
          Lorem Ipsum available but the 
          majority have suffered alteration in some form."
      />

      <CardsSection data={cardData} />
    </div>
  );
}
