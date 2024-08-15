'use client';
import React, { ReactNode } from 'react';

import { AppStores } from '../lib';
import { BottomNav, Drawer } from '../comps';

export default function PageLayout(props: { children: ReactNode }) {
  const store = AppStores.useSettingsStore();

  return (
    <div className={'bg-background w-full'}>
      {props.children}
      <BottomNav />
      {store.drawerIsOpen && <Drawer />}
    </div>
  );
}
