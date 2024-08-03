"use client";
import { AppButton, TextP } from "@repo/ui";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { ModalWrapper, AppTextInput } from "../_comps";
import { ApiClient } from "@/lib";
import { useQuery } from "@tanstack/react-query";

type INetwork = "MTN" | "AIRTEL" | "GLO";
export function PurchaseData(props: { onClose: VoidFunction }) {
  const [sendTo, setSendTo] = useState<INetwork>("MTN");

  const query = useQuery({
    queryKey: ["airtime"],
    queryFn: () => {
      ApiClient.airtime.$get({ json: {} });
    },
  });

  return (
    <>
      <div className="flex items-center justify-between mt-2 mb-0">
        <TextP>Buy data plan</TextP>
        <div
          className="bg-secondary/60 rounded-lg p-[2px]"
          onClick={props.onClose}
        >
          <IoClose className="text-card-foreground" />
        </div>
      </div>

      <div className="px-2 py-2 rounded-md mb-2">
        <div className="px-2 flex gap-x-4 my-2">
          <label htmlFor="network">
            <TextP>Network</TextP>
          </label>
        </div>
        <select
          name="network"
          className="w-full p-2 border-none outline-none"
          onChange={(e) => {
            setSendTo(e.target.value as INetwork);
          }}
        >
          <option value="MTN">MTN</option>
          <option value="AIRTEL">AIRTEL</option>
          <option value="GLO">GLO</option>
        </select>

        <AppTextInput
          control={undefined}
          name={"phone"}
          place="Enter recipient's phone number"
          className="mt-2"
          label="Phone"
        />
        <div className="px-2 flex gap-x-4 my-2">
          <input type="checkbox" name="beneficiary" />
          <label htmlFor="beneficiary">
            <TextP>Save as beneficiary</TextP>
          </label>
        </div>
        <AppButton className="my-2">Send</AppButton>
      </div>
    </>
  );
}
