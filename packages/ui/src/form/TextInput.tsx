"use client";

import { useState } from "react";
import { FieldValues, Path } from "react-hook-form";
import { CiLock } from "react-icons/ci";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { cn } from "../lib";
import { TextP } from "../core";

export function AppTextInput<T extends FieldValues>(props: {
  isPassword?: boolean;
  control: any;
  /** name to be used as label */
  name: Path<T>;
  /** placeholder */
  place?: string;
  /** Description */
  desc?: string;
  label?: string;
  type?: "text" | "number" | "date" | "file";
  errorMessage?: string;
  className?: string;
}) {
  const [showPassword, setToggle] = useState(false);

  return (
    <div className={cn("flex-[1] w-full mb-2", props.className)}>
      <div className="flex flex-col items-start">
        {props.label && (
          <div className="pb-2">
            <TextP v="p5">{props.label}</TextP>
          </div>
        )}

        <div
          className={cn(
            `flex justify-between 
            items-center border rounded-md bg-secondary
            w-full px-2`,
            props.errorMessage ? "border-red-600" : "border-input"
          )}
        >
          {props.isPassword && (
            <CiLock
              className={cn("mx-2", props.errorMessage && "text-red-600")}
            />
          )}

          <input
            name={props.name}
            placeholder={props.place}
            type={props.isPassword && !showPassword ? "password" : props.type}
            className={cn(
              `flex h-12 w-full rounded-md
             border-none outline-none bg-secondary
        `
            )}
            {...props.control}
            // onChange={(e) => {
            //   if (props.type === "number") {
            //     props.control.onChange(parseInt(e.target.value));
            //   } else {
            //     props.control.onChange(e.target.value);
            //   }
            // }}
          />

          {props.isPassword &&
            (showPassword ? (
              <IoEyeOutline
                onClick={() => {
                  setToggle(false);
                  console.log("Clicked on");
                }}
              />
            ) : (
              <IoEyeOffOutline
                onClick={() => {
                  setToggle(true);
                  console.log("Clicked off");
                }}
              />
            ))}
        </div>
        {props.errorMessage && (
          <TextP className={`text-red-500 my-2`}>{props.errorMessage}</TextP>
        )}
        {props.desc && <TextP>{props.desc}</TextP>}
      </div>
    </div>
  );
}
