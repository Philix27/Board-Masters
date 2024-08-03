"use client";

import React, { useState } from "react";
import { Navbar, ToggleSwitch } from "../_comps";

export default function RedeemPage() {
  const [isEmail, setIsEmail] = useState(true);
  return (
    <>
      <Navbar title={"Gift Card"}  />
      <div className={"flex flex-col items-center px-6 py-4 mb-10"}>
      
      </div>
    </>
  );
}
