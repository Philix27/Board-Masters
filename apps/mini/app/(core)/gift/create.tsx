"use client";
import { ApiClient } from "@/app/lib";
import { AppButton, AppTextInput, TextP } from "@repo/ui";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AppContract, transferCusdTokens } from "@/contract/const";
import { useMinipay } from "@/contract";
import { useWriteContract } from "wagmi";

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

export function CreateGiftCard() {
  const [sendTo, setSendTo] = useState<ISendTo>("PHONE");
  const [amount, setAmount] = useState<IAmount>(100);
  const { writeContract } = useWriteContract();
  const { walletAddress } = useMinipay();

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  const mutation = useMutation({
    mutationFn: async (input: IFormSchema) => {
      console.log("On mutate");
      try {
        const res = await ApiClient.gift_card.$post({
          json: {
            phone: `234${input.phone}`,
            purpose: input.purpose,
            email: input.email,
            amount: parseInt(amount as unknown as string),
            user_wallet_address: "10",
          },
        });
        console.log("on success:", res);
        return res;
      } catch (error) {
        throw new Error("Could create gift card");
      }
    },
    onSuccess: async (data, variables, context) => {
      console.log("On success ");
      const res = await data.json();
    },
    onError: (e) => {
      console.log("Oops an error occurred", e);
    },
  });

  async function onSubmit(value: IFormSchema) {
    console.log("Called mutate", parseInt(amount as unknown as string) / 1500);
    const trxnHash = await transferCusdTokens({
      userAddress: walletAddress!,
      amount: parseInt(amount as unknown as string),
    });
    // console.log("Hashed", trxnHash);
    writeContract({
      abi: AppContract.abi,
      address: AppContract.address as `0x${string}`,
      functionName: "createCard",
      args: [value.phone, parseInt(amount as unknown as string)],
    });
    // mutation.mutate({
    //   purpose: value.purpose,
    //   phone: value.phone,
    //   email: value.email,
    //   card_owner: value.card_owner,
    // });
  }

  return (
    <div className="w-full mt-4">
      <TextP className="mb-2">Send to:</TextP>
      <select
        className="w-full p-2 bg-secondary outline-secondary"
        onChange={(e) => {
          setSendTo(e.target.value as ISendTo);
        }}
      >
        <option value="PHONE">Phone</option>
        <option value="EMAIL">Email</option>
      </select>
      <div className="flex flex-col items-center">
        {sendTo === "EMAIL" && (
          <AppTextInput
            errorMessage={form.formState.errors.email?.message}
            control={form.control.register("email")}
            name="email"
            place="Enter email"
            className="mt-2"
            label="Email"
          />
        )}
        {sendTo === "PHONE" && (
          <AppTextInput
            errorMessage={form.formState.errors.phone?.message}
            control={form.control.register("phone")}
            name="phone"
            place="Enter phone number"
            className="mt-2"
            label="Phone"
          />
        )}

        <AppTextInput
          errorMessage={form.formState.errors.card_owner?.message}
          control={form.control.register("card_owner")}
          name={"card_owner"}
          place="Name to show on card"
          className="mt-2"
          label="Card Owner"
        />
        <AppTextInput
          errorMessage={form.formState.errors.purpose?.message}
          control={form.control.register("purpose")}
          name={"purpose"}
          place="Purpose"
          className="mt-2"
          label="Purpose"
        />
        <div className="flex">
          <TextP className="mb-2">Amount:</TextP>
        </div>
        <select
          className="w-full p-2 bg-secondary outline-secondary"
          onChange={(e) => {
            setAmount(e.target.value as unknown as IAmount);
          }}
        >
          <option value={1}>$1</option>
          <option value={2}>$2</option>
          <option value={3}>$3</option>
          <option value={4}>$4</option>
          <option value={5}>$5</option>
        </select>

        <AppButton
          className="my-5 w-[80%]"
          onClick={() => {
            form.handleSubmit(onSubmit)();
          }}
        >
          Create
        </AppButton>
      </div>
    </div>
  );
}
