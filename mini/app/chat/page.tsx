"use client"
import React, { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { getEnv, loadKeys, storeKeys } from './store';
import { ethers } from 'ethers';

export default function ChatPage() {
  const [signer, setSigner] = useState<ethers.HDNodeWallet>();
  const { address } = useAccount();

  useEffect(() => {}, []);

  async function initXmtpWithKeys() {
    try {
      if (!signer) {
        //   handleLogout();
        return;
      }
      //   let address = await getAddress(signer);
      let keys = loadKeys(address);
    } catch (e) {
      console.log(e);
    }
  }

  return <div>ChatPage</div>;
}
