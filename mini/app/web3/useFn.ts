import { AppContract } from '@/web3';
import { useReadContract } from 'wagmi';

export const useGetBalance = (gameId: number) => {
  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: 'getBalance',
    args: [gameId],
  });

  return {
    isLoading: result.isLoading,
    data: result.data as number,
    error: result.error,
  };
};

export const useGetGameDetails = (gameId: number) => {
  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: 'getGameDetails',
    args: [gameId],
  });

  return {
    isLoading: result.isLoading,
    error: result.error,
    data: result.data as {
      player1: string;
      player2: string;
      stakeAmount: bigint;
      winner: string;
      gameStarted: boolean;
      gameEnded: boolean;
    },
  };
};

export const useGetPlayerGames = (userAddress: `0x${string}`) => {
  const result = useReadContract({
    abi: AppContract.abi,
    address: AppContract.address as `0x${string}`,
    functionName: 'getPlayerGames',
    args: [userAddress],
  });

  return {
    isLoading: result.isLoading,
    error: result.error,
    data: result.data as number[],
  };
};
