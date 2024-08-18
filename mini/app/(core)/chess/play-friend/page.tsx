'use client';
import React from 'react';
import { MdScoreboard } from 'react-icons/md';
import { TextH, Navbar, ChessGame } from '@/comps';

export default function BotPage() {
  return (
    <div>
      <Navbar title={'Friends Play'} icon={MdScoreboard} onIconClick={() => {}} isBack />
      <ChessGame />
    </div>
  );
}
