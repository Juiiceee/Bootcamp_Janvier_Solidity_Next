export const addressContract = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
export const abiContract = [
	{
		"type": "function",
		"name": "increment",
		"inputs": [],
		"outputs": [],
		"stateMutability": "nonpayable"
	},
	{
		"type": "function",
		"name": "number",
		"inputs": [],
		"outputs": [
			{
				"name": "",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"stateMutability": "view"
	},
	{
		"type": "function",
		"name": "setNumber",
		"inputs": [
			{
				"name": "newNumber",
				"type": "uint256",
				"internalType": "uint256"
			}
		],
		"outputs": [],
		"stateMutability": "nonpayable"
	}
]