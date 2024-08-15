'use client';

import React from 'react';
import { Link } from 'lucide-react';

import { TextP, TextH, AppButton } from './comps';

export default function PageError() {
  return (
    <div className={'w-full flex items-center justify-center h-screen'}>
      <div className="flex flex-col items-center">
        <TextH className="mb-4">Not Found</TextH>
        <TextP className="mb-4"> Could not find requested resource</TextP>
        <Link href="/">
          <AppButton>Return Home</AppButton>
        </Link>
      </div>
    </div>
  );
}
