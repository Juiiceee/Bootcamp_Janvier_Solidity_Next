"use client";
import { useAccount, type BaseError, useReadContract, useWriteContract, useDisconnect } from "wagmi";
import { addressContract, abiContract } from "@/app/constante";
import { useState } from "react";
import { Address } from "viem";
import { Button, Card } from "antd";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

export default function Home() {
	const router = useRouter();
	const { address } = useAccount();
	const [pubkey, setPubkey] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const { writeContract, error } = useWriteContract();

	const putNumber = async () => {
		writeContract({
			address: addressContract as Address,
			abi: abiContract,
			functionName: "increment",
			args: [],
			account: address,
		});
	}

	if (error) {
		toast.error((error as BaseError).shortMessage);
	}

	return (
		<>
			{address ? <div className="flex justify-center items-center flex-col">
				<Card title="Chercher un vote" style={{ width: 300, marginBottom: 20 }}>
					<input type="text" id="pubkey" placeholder="Pubkey du contrat" className="pl-2 mb-5" onChange={(e) => { setPubkey(e.target.value) }} />
					<Button disabled={!pubkey} onClick={() => router.push(`/vote/${pubkey}`)}>Chercher</Button>
				</Card>
				<Card title="Creer un vote" style={{ width: 300 }}>
					<input type="text" id="name" placeholder="Nom du vote" className="pl-2 mb-5 " onChange={(e) => { setName(e.target.value) }} />
					<input type="text" id="description" placeholder="Description du vote" className="pl-2 mb-5" onChange={(e) => { setDescription(e.target.value) }} />
					<Button disabled={!name || !description} onClick={putNumber}>Creer un vote</Button>
				</Card>
			</div> : ""}
		</>
	);
}
