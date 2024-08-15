'use client';
import React, { useState } from 'react';
import { SettingsItem } from './RowItem';
import { LiaWalletSolid, LiaCoinsSolid, LiaAddressBookSolid } from 'react-icons/lia';
import { TbLibraryPhoto } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { IoFlagOutline } from 'react-icons/io5';
import * as Flags from 'country-flag-icons/string/3x2';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

export function ProfileSettings() {
  const c = Flags.NA;
  const [isLoud, setIsLoud] = useState();
  return (
    <div>
      <SettingsItem title={'Philix27'} endTitle={'change'} icon={IoPersonOutline} />
      <SettingsItem title={`Nigeria`} endTitle={getUnicodeFlagIcon('NG')} icon={IoFlagOutline} />
      <SettingsItem title={'cUSD Balance'} endTitle={'0.00'} icon={LiaWalletSolid} />
      <SettingsItem title={'erc20 Balance'} endTitle={'0.00'} icon={LiaCoinsSolid} />
      <SettingsItem title={'Wallet address'} endTitle={'0.00'} icon={LiaAddressBookSolid} />
      <SettingsItem title={'Avatar'} endTitle={'change'} icon={TbLibraryPhoto} />
      {/* <div className="grid grid-cols-8">
        {countries.map((val) => (
          <div>{getUnicodeFlagIcon(val)}</div>
        ))}
      </div> */}
    </div>
  );
}
