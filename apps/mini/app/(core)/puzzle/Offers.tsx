import { TextP } from "@repo/ui";
import React from "react";

interface IOfferCard {
  name: string;

  tradeCount: string;
  tradePercent: string;
}
const list: IOfferCard[] = [
  { name: "Jude", tradeCount: "35", tradePercent: "90%" },
  { name: "Jane", tradeCount: "344", tradePercent: "100%" },
  { name: "Faith", tradeCount: "222", tradePercent: "45%" },
  { name: "Hope", tradeCount: "490", tradePercent: "10%" },
];

export default function P2pOffers() {
  return (
    <div className="w-full">
      {list.map((val, index) => (
        <div key={index} className="px-3 py-2 bg-secondary mb-2">
          <CardRow title={"Name"} value={val.name} />
          <CardRow title={"Trade Count"} value={val.tradeCount} />
          <CardRow title={"Trade percent"} value={val.tradePercent} />
        </div>
      ))}
    </div>
  );
}

function CardRow(params: { title: string; value: string }) {
  return (
    <div className="w-full flex justify-between items-center hover:border-primary">
      <TextP>{params.title}</TextP>
      <TextP>{params.value}</TextP>
    </div>
  );
}
