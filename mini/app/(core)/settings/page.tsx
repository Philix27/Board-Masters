'use client';
import { Navbar, Tabs } from '@/comps';
import { AppStores } from '@/lib';
import React from 'react';
import { ChessSettings } from './Chess';
import { ProfileSettings } from './Profile';
import Avatar from 'avataaars';

export default function SettingsPage() {
  const store = AppStores.useSettingsStore();
  return (
    <div className="mt-[50px]">
      <Navbar title={'Settings'} />

      <div className="w-full flex items-center justify-center px-6">
        <Avatar
          avatarStyle="Transparent"
          topType="ShortHairDreads02"
          accessoriesType="Round"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="Black"
          eyeType="Default"
          eyebrowType="Default"
          mouthType="Serious"
          skinColor="Brown"
          className="h-[100px] my-4"
        />
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
