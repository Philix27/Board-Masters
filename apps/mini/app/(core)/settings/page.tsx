'use client';
import { Navbar, Tabs } from '@/app/comps';
import { AppStores } from '@/app/lib';
import { TextH, TextP } from '@repo/ui';
import React from 'react';
import { IconBaseProps, IconType } from 'react-icons';
import { LiaAddressBookSolid, LiaWalletSolid } from 'react-icons/lia';
import { LiaCoinsSolid } from 'react-icons/lia';

export default function SettingsPage() {
  const store = AppStores.useSettingsStore();
  return (
    <div className="mt-[50px]">
      <Navbar title={'Settings'} />

      <div className="w-full flex items-center justify-center">
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
          <ProfileItem title={'cUSD Balance'} endTitle={'0.00'} icon={LiaWalletSolid} />
          <ProfileItem title={'erc20 Balance'} endTitle={'0.00'} icon={LiaCoinsSolid} />
          <ProfileItem title={'Wallet address'} endTitle={'0.00'} icon={LiaAddressBookSolid} />
        </div>
      </div>
    </div>
  );
}
function ProfileItem(props: { title: string; endTitle: string; icon: IconType }) {
  const Icon = props.icon;
  return (
    <div className="flex bg-card w-full px-6 py-4 justify-between rounded-lg mb-2">
      <div className="flex items-center">
        <Icon className="text-primary mr-4" size={20} />
        <TextH className='font-bold tracking-wide'>{props.title}</TextH>
      </div>
      <TextP>{props.endTitle}</TextP>
    </div>
  );
}
