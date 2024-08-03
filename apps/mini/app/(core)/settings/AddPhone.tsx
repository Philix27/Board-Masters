import React from "react";
import { ModalWrapper } from "../_comps";
import { AppTextInput } from "@repo/ui";

export default function AddPhone() {
  return (
    <ModalWrapper>
      <div>AddPhone</div>
      <AppTextInput control={undefined} name={""} />
    </ModalWrapper>
  );
}
