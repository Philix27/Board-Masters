import { GiftCard } from "../_comps/card";
import { AppContract, useMinipay } from "@/contract";
import { useReadContract } from "wagmi";
import { genDateTime, shortenAddress, Spinner } from "../_comps";
import { parseEther } from "viem";
import { useState } from "react";
import SettleCard from "./PurchaseAirtime";

export interface ICard {
  amount: BigInt;
  createdAt: number;
  from: string;
  id: number;
  isClaimed: boolean;
  to: string;
  updatedAt: number;
}

export function EmailGiftCards() {
  const { walletAddress } = useMinipay();
  const [showSettler, setShowSettler] = useState(false);

  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: "getCardsCreatedFor",
    args: ["an identifier"],
  });

  if (!walletAddress) {
    return <Spinner />;
  }
  if (result.isLoading) {
    return <Spinner />;
  }
  const data = result.data as ICard[];
  console.log("Data", data);
  // const query = useQuery({
  //   queryKey: ["giftCard"],
  //   queryFn: () => {
  //     // ApiClient.airtime.$get({ json: {} });
  //   },
  // });

  return (
    <div className="w-full">
      {data.map((val, i) => {
        return (
          <GiftCard
            key={i}
            cardOwner={val.to}
            amount={val.amount.toString()}
            created={genDateTime(Number(val.createdAt))}
            from={shortenAddress(val.from)}
            onClick={() => setShowSettler(true)}
          />
        );
      })}
      {showSettler && <SettleCard onClose={() => setShowSettler(false)} />}
    </div>
  );
}
