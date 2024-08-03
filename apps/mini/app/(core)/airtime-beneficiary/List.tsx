import React from "react";
import { AirtimeBeneficiaryRpc } from "@repo/rpc";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../_comps";
import { RowItem } from "./RowItem";

export default function List() {
  const rpc = new AirtimeBeneficiaryRpc();
  const { data, status, isLoading } = useQuery(["beneficiary"], async () => {
    return await rpc.getAll({ user_id: 1 });
  });

  if (isLoading || typeof data === "undefined") {
    return <Spinner />;
  }
  console.log(data)
  return (
    <div>
      {data.map((val, i) => (
        <RowItem key={i} left={val.title} right={val.phone} />
      ))}
    </div>
  );
}
