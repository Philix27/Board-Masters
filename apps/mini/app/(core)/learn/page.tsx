'use client';

import { Navbar } from '../_comps';
import React, { useState } from 'react';
import { z } from 'zod';

export default function FxCrypto() {
  const [isBuy, setIsBuy] = useState<boolean>(true);

  return (
    <>
      <Navbar title={'Learn'} isBack />
      <div className="w-full mt-4 px-6 mt-[50px]">Learn chess</div>
    </>
  );
}
