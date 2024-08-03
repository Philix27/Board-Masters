"use client";

import { Navbar, ToggleSwitch } from "../_comps";
import { AppButton, AppTextInput, cn, TextP } from "@repo/ui";
import React, { useState } from "react";
import { z } from "zod";

export default function FxCrypto() {
  const [isBuy, setIsBuy] = useState<boolean>(true);


  return (
    <>
      <Navbar title={"Quick Swap"} isBack />
      <div className="w-full mt-4 px-6 ">
      
      </div>
    </>
  );
}
