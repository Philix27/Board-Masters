'use client';
import React from 'react';
import { MdScoreboard } from 'react-icons/md';
import { Navbar } from '../_comps';
import { TextH } from '@repo/ui';

export default function BotPage() {
  return (
    <div>
      <Navbar title={'Home'} icon={MdScoreboard} onIconClick={() => {}} isBack />
      <TextH> Bot play</TextH>
    </div>
  );
}
