"use client";

import React, { useState } from "react";
import { EmailGiftCards } from "./CardsEmail";
import { PhoneGiftCards } from "./CardsPhone";
import { Navbar, ToggleSwitch } from "../_comps";
import { IoAdd } from "react-icons/io5";
import { CreateGiftCard } from "../gift/create";

export default function RedeemPage() {
  const [isEmail, setIsEmail] = useState(true);
  return (
    <>
      <Navbar title={"Gift Card"} icon={IoAdd} />
      <div className={"flex flex-col items-center px-6 py-4 mb-10"}>
        <CreateGiftCard />
        <ToggleSwitch
          isTitle1={isEmail}
          title1="Email"
          title2="Phone"
          setTitle1={setIsEmail}
        />

        {isEmail ? <EmailGiftCards /> : <PhoneGiftCards />}
      </div>
    </>
  );
}
