"use client";

import React from "react";

import {
  CardsSection,
  HeroSection,
  HeroCenter,
  JumbutronSection,
  HeroWithImg,
} from "../_comps";
import { AppImg } from "../../lib";
import { TextH } from "@repo/ui";
import { cardData } from "./cards";

export default function HomePage() {
  return (
    <div>
      <HeroWithImg img={"/fx1.png"}>
        <TextH
          v="h1"
          className={
            "text-[24px] font-extrabold md:text-[50px] text-card-foreground"
          }
        >
          <span className="text-primary"> Send </span> and
          <span className="text-primary"> Receive</span> Crypto and Fiat to
          family and friends.
        </TextH>
      </HeroWithImg>
      <HeroSection
        img={AppImg.chain}
        title={"Our Mission"}
        subtitle={`Our mission is to provide our clients with a 
          transformative and user-friendly platform for savings 
          and financial empowerment. We are committed to 
          offering a seamless way for individuals to 
          save a fixed amount of their salary every month, 
          fostering a culture of disciplined saving
          and financial responsibility.`}
      />
      <JumbutronSection
        title={"Our core offerings"}
        subtitle="There are many variations of passages of 
          Lorem Ipsum available but the 
          majority have suffered alteration in some form."
      />

      <HeroSection
        imgFirst
        img={AppImg.invoice}
        title={"Our vision"}
        subtitle={`Our vision far extends beyond 
          traditional savings models, aiming to 
          eradicate the excuses commonly associated 
          with Adashi/Ajo and provide clients with 
          a seamless and flexible way to save. Through 
          this product, we envision a future where financial 
          stability is within reach for all, where individuals have the opportunity 
          to grow their savings and access low interest loans with ease.`}
      />
      <JumbutronSection
        title={"Access to Funds"}
        subtitle={`We are dedicated to ensuring that our 
          clients have access to their 
          funds as at when needed,
          providing them with financial
          flexibility and peace of mind`}
      />
      <CardsSection data={cardData} />
    </div>
  );
}
