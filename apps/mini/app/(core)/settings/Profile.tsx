import React from 'react';
import { SettingsItem } from './RowItem';
import { LiaWalletSolid, LiaCoinsSolid, LiaAddressBookSolid } from 'react-icons/lia';
import { TbLibraryPhoto } from 'react-icons/tb';
import { IoPersonOutline } from 'react-icons/io5';
import { IoFlagOutline } from 'react-icons/io5';

export function ProfileSettings() {
  return (
    <div>
      <SettingsItem title={'Philix27'} endTitle={'change'} icon={IoPersonOutline} />
      <SettingsItem title={'Nigeria'} endTitle={'country'} icon={IoFlagOutline} />
      <SettingsItem title={'cUSD Balance'} endTitle={'0.00'} icon={LiaWalletSolid} />
      <SettingsItem title={'erc20 Balance'} endTitle={'0.00'} icon={LiaCoinsSolid} />
      <SettingsItem title={'Wallet address'} endTitle={'0.00'} icon={LiaAddressBookSolid} />
      <SettingsItem title={'Avatar'} endTitle={'change'} icon={TbLibraryPhoto} />
    </div>
  );
}
