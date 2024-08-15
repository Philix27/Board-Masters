import React, { ReactNode } from "react";
import { MarketingNavItems, NavbarAuth } from "./_comps";

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="h-screen ">
      <NavbarAuth title={"OffRamp"} items={MarketingNavItems} />
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
    </div>
  );
}
