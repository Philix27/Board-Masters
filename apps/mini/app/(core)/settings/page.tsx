'use client';
import { Navbar, Tabs } from '@/app/comps';
import { AppStores } from '@/app/lib';
import { TextH, TextP } from '@repo/ui';
import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { LiaAddressBookSolid, LiaWalletSolid } from 'react-icons/lia';
import { LiaCoinsSolid } from 'react-icons/lia';
import { ChessSettings } from './Chess';
import { ProfileSettings } from './Profile';

export default function SettingsPage() {
  const store = AppStores.useSettingsStore();
  return (
    <div className="mt-[50px]">
      <Navbar title={'Settings'} />

      <div className="w-full flex items-center justify-center px-6">
        <img src="/icons/profile.png" className="w-[150px]" />
      </div>
      <div className="px-4">
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
        <div className="mt-2">
          {store.settingsView === 'CHESS' && <ChessSettings />}
          {store.settingsView === 'CHECKERS' && <ChessSettings />}
          {store.settingsView === 'PROFILE' && <ProfileSettings />}
        </div>
      </div>
    </div>
  );
}
