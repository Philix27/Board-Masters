import React from "react";
import { NavItem } from "../navbar";
import { TextP } from "@repo/ui";
import Link from "next/link";

export default function MobileSidebar(props: { items?: NavItem[] }) {
  return (
    <div className="bg-card mt-[40px] w-screen fixed left-0 px-8">
      {props.items?.map((v, i) => (
        <Link
          key={i}
          href={v.href || "/#"}
              className={`
          p-2 rounded-md w-full
          focus:[&>p]:text-primary-foreground`}
        >
          <TextP v="p6" className={"text-primary"}>
            {v.title}
          </TextP>
        </Link>
      ))}
    </div>
  );
}
