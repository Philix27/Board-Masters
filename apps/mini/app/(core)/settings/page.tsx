'use client';
import { Navbar, Tabs } from '@/app/comps';
import { AppStores } from '@/app/lib';
import React from 'react';

export default function SettingsPage() {
  const store = AppStores.useSettingsStore();
  return (
    <div className="mt-[50px]">
      <Navbar title={'Settings'} />

      <div className='w-full flex items-center justify-center'>
        <img src='/icons/profile.png' className='w-[150px]' />
      </div>
      <Tabs
        data={[
          {
            title: 'Profile',
            isActive: store.settingsView === 'PROFILE',
            onClick: () => {
              store.update({ settingsView: 'PROFILE' });
            },
          },
          {
            title: 'Chess',
            isActive: store.settingsView === 'CHESS',
            onClick: () => {
              store.update({ settingsView: 'CHESS' });
            },
          },
          {
            title: 'Checkers',
            isActive: store.settingsView === 'CHECKERS',
            onClick: () => {
              store.update({ settingsView: 'CHECKERS' });
            },
          },
        ]}
      />
    </div>
  );
}
