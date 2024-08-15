"use client"

import React, { useState } from "react"
import OtpInput from "react-otp-input"

import { TextB } from "../custom"

export function AppOtpInput(props: {
  otp: string
  setOtp: React.Dispatch<React.SetStateAction<string>>
  hasError?: boolean
}) {
  return (
    <div className={`w-full mt-4 flex flex-col items-center justify-center`}>
      <OtpInput
        value={props.otp}
        onChange={(val) => {
          props.setOtp(val)
          console.log(val)
        }}
        numInputs={6}
        renderInput={(props) => (
          <input
            {...props}
            type="number"
            style={{ color: "black", width: "40px" }}
            className={`mx-1 text-primary py-2 px-3 
              border-primary rounded-md
              border focus:border-primary`}
          />
        )}
      />
      {props.hasError && (
        <div className="my-2 ">
          <TextB className="text-red-500">Invalid</TextB>
        </div>
      )}
    </div>
  )
}
