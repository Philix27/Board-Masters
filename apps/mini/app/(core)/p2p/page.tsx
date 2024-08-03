"use client";
import React, { useState } from "react";
import { Navbar, ToggleSwitch } from "../_comps";
import P2pOffers from "./Offers";
import { TextP } from "@repo/ui";

export default function P2Ppage() {
  const [isBuy, setIsBuy] = useState<boolean>(true);
  return (
    <>
      <Navbar title={"Exchange"} />
      <div className={"w-full px-6 py-2"}>
        <ToggleSwitch
          isTitle1={isBuy}
          title1="Buy"
          title2="Sell"
          setTitle1={setIsBuy}
        />
        <div className="my-4" />
        <P2pOffers />
      </div>
    </>
  );
}
