"use client";
import { useAccount, useDisconnect } from "wagmi";
import { useState } from "react";
import { Button, Card } from "antd";

export default function Home() {
	const { address } = useAccount();
	const [pubkey, setPubkey] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");

	const sendFirst =() => {
		console.log("Pubkey: ", pubkey);
	}

	const sendSecond =() => {
		console.log("Name: ", name);
		console.log("Description: ", description);
	}

	return (
		<>
			{address ? <div className="flex justify-center items-center flex-col">
				<Card title="Chercher un vote" style={{ width: 300, marginBottom: 20 }}>
					<input type="text" id="pubkey" placeholder="Pubkey du contrat" className="pl-2 mb-5" onChange={(e) => {setPubkey(e.target.value)}}/>
					<Button disabled={!pubkey} onClick={sendFirst}>Chercher</Button>
				</Card>

				<Card title="Creer un vote" style={{ width: 300}}>
					<input type="text" id="name" placeholder="Nom du vote" className="pl-2 mb-5 " onChange={(e) => {setName(e.target.value)}}/>
					<input type="text" id="description" placeholder="Description du vote" className="pl-2 mb-5" onChange={(e) => {setDescription(e.target.value)}}/>
					<Button disabled={!name || !description} onClick={sendSecond}>Creer un vote</Button>
				</Card>
			</div> : ""}
		</>
	);
}
