import { useBalance, useReadContract } from "wagmi";
export default function vote({ params }: { params: { pubKey: string } }) {
	const { data: recupVote } = useReadContract({
		functionName: 'balanceOf',
		args: ['0x03A71968491d55603FFe1b11A9e23eF013f75bCF'],
	  })
	return (
		<div>
			<h1>Vote</h1>
			<p>Pubkey: {params.pubKey}</p>
		</div>
	);
}
