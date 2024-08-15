"use client";

import React from "react";
import { TextH, TextP } from "@repo/ui";
import Link from "next/link";
import { AppPages } from "../../lib";

export function FooterSection() {
  return (
    <div
      className={`
      w-full border-t-[1px] border-primary
      bg-primary flex items-center
      justify-center`}
    >
      <div
        className={`w-[80%]
        py-4 h-full flex md:flex-row 
        flex-col items-center 
        md:items-start justify-around
      `}
      >
        <Section
          title={"Company"}
          list={[
            { title: "About Us", link: AppPages.aboutUs },
            { title: "Blogs", link: AppPages.blogs },
            { title: "Terms of Service", link: AppPages.termsCondition },
            { title: "Privacy Policy", link: AppPages.privacyPolicy },
          ]}
        />
        <Section
          title={"Solutions"}
          list={[
            { title: "Gift cards", link: AppPages.solutions },
            { title: "Swap", link: "#" },
          ]}
        />
        <Section
          title={"Support"}
          list={[
            { title: "FAQ", link: AppPages.faq },
            { title: "Contact Us", link: AppPages.contactUs },
          ]}
        />
        <Section
          title={"Link"}
          list={[
            { title: "Email", link: "#" },
            { title: "LinkedIn", link: "#" },
            { title: "Instagram", link: "#" },
            { title: "Facebook", link: "#" },
          ]}
        />
      </div>
    </div>
  );
}

function Section(props: {
  title: string;
  list: { title: string; link: string }[];
}) {
  return (
    <div
      className={
        "flex flex-col mb-4 w-full md:w-fit md:items-start items-center md:py-4 py-2"
      }
    >
      <TextH v="h4" className={"font-bold text-primary-foreground"}>
        {props.title}
      </TextH>
      {props.list.map((val, i) => (
        <Link href={val.link} key={i}>
          <TextP>{val.title}</TextP>
        </Link>
      ))}
    </div>
  );
}
