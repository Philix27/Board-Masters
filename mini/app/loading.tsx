"use client"

import React from "react"

import { AppLoader } from "./comps"

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <AppLoader />
    </div>
  )
}
