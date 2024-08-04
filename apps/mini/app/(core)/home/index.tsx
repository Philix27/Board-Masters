"use client";
import { TextH } from "@repo/ui";
import React from "react";
import { Navbar } from "../_comps";
import { Game } from "./Game";

export  function HomePage() {

  return (
    <>
      <Navbar title={"Home"}  />
      <div className="px-6 mb-10">
      <Game />
      </div>
    </>
  );
}
