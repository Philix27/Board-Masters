import { geAppContract } from '.';

export async function joinGame(props: { userAddress: string; stakeAmount: number }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.joinGame!(props.stakeAmount);
    await txn.wait();
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Failed operation');
  }
}

export async function getBalance(props: { userAddress: string; gameId: number }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.getAllCards!(props.gameId);
    await txn.wait();
  } catch (error) {
    console.error('Error:', error);
    // throw new Error("Failed operation");
  }
}

export async function setWinner(props: { userAddress: string; gameId: number; winner: string }) {
  const contract = await geAppContract(props.userAddress);

  try {
    const txn = await contract.setWinner!(props.gameId, props.winner);
    const data = await txn.wait();
    return data;
  } catch (error) {
    console.error('Error:', error);
    // throw new Error("Failed operation");
  }
}
