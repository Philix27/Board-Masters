import React from "react";
import { AuthWrapper } from "../_comps";

export default function ResetPasswordPage() {
  return (
    <AuthWrapper
      imgPath={"/fx1.png"}
      title={"Forgot Password"}
      subtitle={"Reset password"}
    >
      <div>Forgot Password</div>
    </AuthWrapper>
  );
}
