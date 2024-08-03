"use client";

import React from "react";
import { TextH, TextP } from "@repo/ui";
import { TokenAddress, useMinipay } from "@/contract";
import { Navbar, } from "../_comps";

export default function AccountPage() {
  const { walletAddress } = useMinipay();
 

  return (
    <>
      <Navbar title={"Game Board"} />
      <div className={"flex flex-col items-center px-4 py-6 mb-10"}>
        <TextH v="h5">Personal</TextH>
      
      </div>
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
