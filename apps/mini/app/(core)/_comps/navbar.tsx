"use client";
import { TextP } from "@repo/ui";
import React from "react";
import { IconType } from "react-icons";
import { ThemeToggle } from "./theme";
import { IoArrowBack, IoMenu } from "react-icons/io5";
import { AppStores } from "@/lib";
import { useRouter } from "next/navigation";

export function Navbar(props: {
  title: string;
  icon?: IconType;
  isBack?: boolean;
  onIconClick?: VoidFunction;
}) {
  const Icon = props.icon!;
  const store = AppStores.useSettingsStore();
  const router = useRouter();
  return (
    <div
      className={
        "h-[50px] border-b-[0.3px] px-4 flex items-center justify-between"
      }
    >
      <div className="flex items-center gap-x-2">
        {props.isBack ? (
          <IoArrowBack
            size={22}
            onClick={() => {
              router.back();
            }}
          />
        ) : (
          <IoMenu
            size={22}
            onClick={() => {
              store.update({ drawerIsOpen: true });
            }}
          />
        )}

        {/* <IoIosCard className={"text-white text-2xl font-black"} /> */}
        {!props.isBack && (
          <h1 className={"text-primary text-md font-black tracking-wide"}>
            PR
          </h1>
        )}
      </div>
      <TextP v="p4" className="text-card-foreground my-0">
        {props.title}
      </TextP>
      <div className="flex items-center gap-x-3">
        {props.icon ? <Icon onClick={props.onIconClick} /> : <div />}
      </div>
    </div>
  );
}
