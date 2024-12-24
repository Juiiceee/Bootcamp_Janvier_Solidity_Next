import { useBalance, useReadContract, useWriteContract, useAccount } from "wagmi";
import { useState } from "react";
import { addressContract, abiContract } from "@/app/constante";
export default function vote({ params }: { params: { pubKey: string } }) {

	const {writeContract} = useWriteContract();
	const { address} = useAccount();

	const putNumber = async () => {
		writeContract({
			address: addressContract,
			abi: abiContract,
			functionName: "increment",
			args: [],
			account: address,
		})
	}
	const { data: recupVote } = useReadContract({
		functionName: 'balanceOf',
		args: [addressContract],
	  })
	return (
		<div>
			<h1>Vote</h1>
			<p>Pubkey: {params.pubKey}</p>
		</div>
	);
}
