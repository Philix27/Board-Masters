'use client';

import React from 'react';

import { CardsSection, HeroSection, JumbutronSection, HeroWithImg } from '../_comps';
import { AppImg } from '../../lib';
import { TextH } from '@/comps';
import { cardData } from './cards';

export function HomeSection() {
  return (
    <div>
      <HeroWithImg img={'/fx1.png'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary"> Send </span> and
          <span className="text-primary"> Receive</span> Crypto and Fiat to family and friends.
        </TextH>
      </HeroWithImg>
      <div className='hidden md:block'>
        <HeroSection
          img={AppImg.chain}
          title={'Our Mission'}
          subtitle={`Our mission is to provide our clients with a 
          transformative and user-friendly platform for savings 
          and financial empowerment. We are committed to 
          offering a seamless way for individuals to 
          save a fixed amount of their salary every month, 
          fostering a culture of disciplined saving
          and financial responsibility.`}
        />
      </div>
      <JumbutronSection
        title={'Our core offerings'}
        subtitle="There are many variations of passages of 
          Lorem Ipsum available but the 
          majority have suffered alteration in some form."
      />

      <CardsSection data={cardData} />
    </div>
  );
}
