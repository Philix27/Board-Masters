'use client';

import React from 'react';
import { TextP } from '@repo/ui';
import { Navbar } from '../_comps';

export default function BoardPage() {
  return (
    <>
      <Navbar title={'Board'} isBack />
    </>
  );
}

function RowItem(props: { left: string; right: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={'text-card-foreground'}>{props.left} </TextP>
      <TextP>{props.right}</TextP>
    </div>
  );
}
