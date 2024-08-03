"use client";

import React, { useState } from "react";
import { AppButton, TextH } from "@repo/ui";
import { Navbar, ModalWrapper } from "../_comps";
import List from "./List";
import { AddBeneficiaryModal } from "./AddBene";

export default function AirtimeBeneficiaryPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar title={"Airtime Beneficiaries"} />
      <div className={"flex flex-col items-center px-4 py-6 mb-10"}>
        <div className="flex items-center justify-between w-full px-4">
          <TextH v="h5">Beneficiary</TextH>
          <AppButton
            className="w-fit py-[1px]"
            onClick={() => setShowModal(true)}
          >
            Add
          </AppButton>
        </div>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <List />
        </div>
      </div>
      {showModal && (
        <ModalWrapper>
          <AddBeneficiaryModal onClose={() => setShowModal(false)} />
        </ModalWrapper>
      )}
    </>
  );
}
