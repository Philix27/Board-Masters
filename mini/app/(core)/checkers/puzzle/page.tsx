'use client';
import React, { useState } from 'react';
import { Navbar } from '@/comps';

export default function PuzzlePage() {
  const [isBuy, setIsBuy] = useState<boolean>(true);
  return (
    <>
      <Navbar title={'Exchange'} />
      <div className={'w-full px-6 py-2 mt-[50px]'}></div>
    </>
  );
}
