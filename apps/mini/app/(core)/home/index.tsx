"use client";
import { TextH } from "@repo/ui";
import React from "react";
import { Navbar } from "../_comps";

export  function HomePage() {

  return (
    <>
      <Navbar title={"Home"}  />
      <div className="px-6 mb-10">
        HomePage
      </div>
    </>
  );
}
