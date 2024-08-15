import { TextH, TextP, AppTextInput } from "@repo/ui";
import React, { ReactNode } from "react";

export function AuthWrapper(props: {
  children: ReactNode;
  imgPath: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className={`flex w-full h-full`}>
      <div className={"w-[50%] bg-teal-700 hidden md:block"}>
        <img src={props.imgPath} className={`h-full w-full object-cover`} />
      </div>
      <div
        className={
          "md:w-[50%] w-full h-full flex flex-col items-center justify-center"
        }
      >
        <div>
          <TextH>{props.title}</TextH>
          <TextP>{props.subtitle}</TextP>
        </div>
        {props.children}
      </div>
    </div>
  );
}
