"use client";

import { Navbar, ToggleSwitch } from "../_comps";
import { AppButton, AppTextInput, cn, TextP } from "@repo/ui";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const formSchema = z.object({
  purpose: z.string().max(30, { message: "Maximum of 25 characters" }),
  email: z.string().max(30, { message: "Maximum of 25 characters" }).optional(),
  card_owner: z.string().optional(),
  phone: z
    .string()
    .max(11, { message: "Maximum of 11 numbers" })
    .min(11, { message: "Minimum of 11 numbers" })
    .optional(),
});

export const defaultValues: z.infer<typeof formSchema> = {
  phone: "",
  purpose: "",
  card_owner: "",
};

export type IFormSchema = z.infer<typeof formSchema>;

type ISendTo = "PHONE" | "EMAIL";
type IAmount = 100 | 200 | 300 | 400 | 500 | 1000;

export default function FxCrypto() {
  const [isBuy, setIsBuy] = useState<boolean>(true);
  const [amount, setAmount] = useState<IAmount>(100);

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(value: IFormSchema) {
    console.log("Called mutate", parseInt(amount as unknown as string) / 1500);
  }

  return (
    <>
      <Navbar title={"Quick Swap"} isBack />
      <div className="w-full mt-4 px-6 ">
        <div className="w-full flex flex-col items-center justify-center">
          <ToggleSwitch
            isTitle1={isBuy}
            title1="Buy"
            title2="Sell"
            setTitle1={setIsBuy}
          />
          <AppTextInput
            errorMessage={form.formState.errors.phone?.message}
            control={form.control.register("phone")}
            name="Amount"
            place={!isBuy ? "cUSD" : "Naira"}
            className="mt-2"
            label={!isBuy ? "Amount in cUSD" : "Amount in naira"}
            type="number"
          />

          <TextP className="mb-2">Amount:</TextP>

          <AppButton
            className={cn("mt-5 mb-2 w-[80%]", isBuy && "bg-green-500")}
            onClick={() => {
              // form.handleSubmit(onSubmit)();
            }}
          >
            {!isBuy ? "SELL" : "BUY"}
          </AppButton>
        </div>
      </div>
    </>
  );
}
