'use client';
import React from 'react';
import { MdScoreboard } from 'react-icons/md';
import { Navbar } from '@/comps';
import { TextH } from '@/comps';

export default function BotPage() {
  return (
    <div>
      <Navbar title={'Bot'} icon={MdScoreboard} onIconClick={() => {}} isBack />
      <TextH> Bot play</TextH>
    </div>
  );
}
