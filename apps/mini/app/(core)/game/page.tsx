'use client';

import React from 'react';
import { Game } from './Game';
import { Navbar } from '../_comps';

export default function AccountPage() {
  return (
    <>
      <Navbar title={'Game Board'} />
      <Game />
    </>
  );
}
