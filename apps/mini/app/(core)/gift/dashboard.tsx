import { TextP } from "@repo/ui";
import React from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const dashboardList = [
    {
      title: "Airtime",
      onClick: () => {
        router.push("/airtime");
        // setShowModal("AIRTIME");
      },
    },
    {
      title: "Data",
      onClick: () => {
        router.push("/airtime-data");
      },
    },
    {
      title: "Subscription",
      onClick: () => {
        router.push("/airtime-sub");
      },
    },
    {
      title: "Withdraw",
      onClick: () => {
        router.push("/swap");
      },
    },
  ];

  return (
    <div
      className={`grid grid-cols-3 
        gap-x-2 gap-y-2`}
    >
      {dashboardList.map((val, i) => (
        <div
          key={i}
          onClick={val.onClick}
          className={`bg-secondary 
              px-2 rounded-sm py-2
              flex items-center justify-center`}
        >
          <TextP v="p6">{val.title}</TextP>
        </div>
      ))}
    </div>
  );
}
