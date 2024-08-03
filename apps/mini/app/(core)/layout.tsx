"use client"
import React, { ReactNode } from "react";

import { BottomNav } from "./_comps";
import Drawer from "./_comps/drawer";
import { AppStores } from "../lib";

export default function PageLayout(props: { children: ReactNode }) {
  const store = AppStores.useSettingsStore();

  return (
    <div className={"bg-background w-full"}>
      {props.children}
      <BottomNav />
      {store.drawerIsOpen && <Drawer />}
    </div>
  );
}
