import React, { ReactNode } from "react";
import { MarketingNavItems, NavbarMarketing } from "./_comps/navbar";
import { FooterSection } from "./_comps";

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="h-screen ">
      <NavbarMarketing title={"OffRamp"} items={MarketingNavItems} />
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
      <FooterSection />
    </div>
  );
}
