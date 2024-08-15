"use client";

import { cn } from "@repo/ui";
import React, { ReactNode } from "react";

export function HeroWithImg(props: {
  children: ReactNode;
  img: string;
  className?: string;
}) {
  return (
    <section className={cn("w-full md:py-0 py-5", props.className)}>
      <div
        className={`md:w-[80%] container
        md:min-h-[70vh] w-full 
        flex items-center justify-between
        flex-col md:flex-row
    `}
      >
        <div
          className={`
        pt-4 h-full
        w-[85%]
        md:w-[50%] gap-x-4
      `}
        >
          {props.children}
        </div>
        <div className="my-5">
          <img src={props.img} className="md:h-[300px] h-[200px] w-auto" />
        </div>
      </div>
    </section>
  );
}
