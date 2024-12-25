"use client";
import { useAccount, type BaseError, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { addressContract, abiContract } from "@/app/constante";
import { useState, useEffect } from "react";
import { Address } from "viem";
import { Button, Card } from "antd";
import toast from 'react-hot-toast';

export default function Home() {
	const { address } = useAccount();
	const [storage, setStorage] = useState(0);
	const { data: hash, writeContract, error } = useWriteContract();

	const setNumber = async () => {
		writeContract({
			address: addressContract as Address,
			abi: abiContract,
			functionName: "setNumber",
			args: [storage],
			account: address,
		});
	}

	const increment = async () => {
		writeContract({
			address: addressContract as Address,
			abi: abiContract,
			functionName: "increment",
			args: [],
			account: address,
		});
	}

	const decrement = async () => {
		writeContract({
			address: addressContract as Address,
			abi: abiContract,
			functionName: "decrement",
			args: [],
			account: address,
		});
	}

	const { data: number , refetch } = useReadContract({
		address: addressContract as Address,
		abi: abiContract,
		functionName: "number",
		args: [],
	});

	const { isSuccess: isConfirmed } =
		useWaitForTransactionReceipt({
			hash,
		})

	useEffect(() => {
		if (isConfirmed) {
			toast.success('Transaction confirmée');
		}
	},
		[isConfirmed]);

	useEffect(() => {
		if (error) {
			toast.error('Erreur lors de la transaction: ' + (error as BaseError).shortMessage);
		}
	}, [error]);



	return (
		<>
			{address ? <div className="flex justify-center items-center flex-col">
				<Card title="Lire le smart contract" style={{ width: 300, marginBottom: 20 }}>
					<div className="flex flex-col items-center">
						{number ? <p>Le nombre stocké est: {number.toString()}</p> : ""}
						<Button onClick={() => refetch()}>Refetch value</Button>
					</div>
				</Card>
				<Card title="Interagir avec le smart contract" style={{ width: 300 }}>
					<div className="flex flex-col items-center">
						<input type="number" id="storage" placeholder="Set le nombre" onChange={(e) => { setStorage(Number(e.target.value)) }} />
						<Button className="my-2" disabled={!storage} onClick={setNumber}>Set</Button>
						<Button className="my-2" onClick={increment}>Incrementer</Button>
						<Button className="my-2" onClick={decrement}>Decrementer</Button>
					</div>
				</Card>
			</div> : ""}
		</>
	);
}
