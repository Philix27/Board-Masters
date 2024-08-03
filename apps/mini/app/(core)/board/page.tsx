"use client";

import React, { useState } from "react";
import { AppButton, AppTextInput, TextH, TextP } from "@repo/ui";
import { useBalance } from "wagmi";
import { TokenAddress, useMinipay } from "@/contract";
import { Navbar } from "../_comps";

type INetwork = "MTN" | "AIRTEL" | "GLO";

export default function AccountPage() {
  const { walletAddress } = useMinipay();
  const result = useBalance({
    address: walletAddress,
    token: TokenAddress.CUSD_TESTNET as `0x${string}`,
  });
  const [sendTo, setSendTo] = useState<INetwork>("MTN");

  return (
    <>
      <Navbar title={"Buy Airtime"} isBack />
      <>
        <div className="px-6 py-6 mb-10 rounded-md ">
          <div className="px-2 flex gap-x-4 my-2">
            <label htmlFor="network">
              <TextP>Network</TextP>
            </label>
          </div>
          <select
            name="network"
            className="w-full p-2 border-none outline-none"
            onChange={(e) => {
              setSendTo(e.target.value as INetwork);
            }}
          >
            <option value="MTN">MTN</option>
            <option value="AIRTEL">AIRTEL</option>
            <option value="GLO">GLO</option>
          </select>

          <AppTextInput
            control={undefined}
            name={"phone"}
            place="Enter recipient's phone number"
            className="mt-2"
            label="Phone"
          />
          <div className="px-2 flex gap-x-4 my-2">
            <input type="checkbox" name="beneficiary" />
            <label htmlFor="beneficiary">
              <TextP>Save as beneficiary</TextP>
            </label>
          </div>

          <select
            name="network"
            className="w-full p-2 border-none outline-none"
            onChange={(e) => {
              setSendTo(e.target.value as INetwork);
            }}
          >
            <option value="MTN">Select Beneficiary</option>
            <option value="AIRTEL">John</option>
            <option value="GLO">Jude</option>
          </select>

          <AppTextInput
            control={undefined}
            name={"amount"}
            place="Enter amount in naira"
            type="number"
            className="mt-2"
            label="Amount"
          />
          <AppButton className="my-2">Send</AppButton>
        </div>
      </>
    </>
  );
}

function RowItem(props: { left: string; right: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={"text-card-foreground"}>{props.left} </TextP>
      <TextP>{props.right}</TextP>
    </div>
  );
}
