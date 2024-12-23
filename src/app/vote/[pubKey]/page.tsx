export default function vote( { params }: { params: { pubKey: string } } ) {
	return (
		<div>
			<h1>Vote</h1>
			<p>Pubkey: {params.pubKey}</p>
		</div>
	);
}