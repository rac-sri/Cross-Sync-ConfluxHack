import React, { useState } from 'react';
import {
	Card,
	Container,
	CardContent,
	TextField,
	Button,
} from '@material-ui/core';
import { contract } from '../../utils/harmony/wallet.ts';
import { addExchangeMoney as OneExchange } from '../../utils/harmony/utils/user.ts';
import { addExchangeMoney } from '../../utils/ethereum/utils/user.ts';
import ethereum from '../../utils/ethereum/loadBlockchainData.ts';

export default function Convert() {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);
	const [ethAdd, updateETHAdd] = useState('0x');
	const [oneAdd, updateOneAdd] = useState('0x');

	const onSubmitETH = async () => {
		const contractInstance = await ethereum();
		console.log(eth);
		const tx = await addExchangeMoney(
			contractInstance.Contract,
			contractInstance.accounts,
			10,
			eth
		);
		console.log(oneAdd, tx);
	};

	const onSubmitOne = async () => {
		console.log(eth, one);
		const contractInstance = await contract();
		const tx = await OneExchange(contractInstance, 10, one);
		console.log(tx, ethAdd);
	};

	return (
		<Container>
			<br />
			<Card>
				<CardContent>
					<h2> ETH to ONE</h2>
					<br />
					<TextField
						id="outlined-basic"
						label="ONE Address"
						variant="outlined"
						margin="dense"
						onChange={(e) => updateOneAdd(e.target.value)}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Get ETH Token"
						variant="outlined"
						margin="dense"
						onChange={(e) => updateETH(e.target.value)}
					/>
					<br />
					<Button
						variant="contained"
						color="primary"
						onClick={() => onSubmitETH()}
					>
						Convert
					</Button>
				</CardContent>
			</Card>
			<br />
			<br />
			<Card>
				<CardContent>
					<h2>ONE to ETH</h2>
					<br />
					<TextField
						id="outlined-basic"
						label="ETH Address"
						variant="outlined"
						margin="dense"
						onChange={(e) => updateETHAdd(e.target.value)}
					/>
					<br />
					<TextField
						id="outlined-basic"
						label="Get ONE Token"
						variant="outlined"
						margin="dense"
						onChange={(e) => updateOne(e.target.value)}
					/>
					<br />
					<Button
						variant="contained"
						color="primary"
						onClick={() => onSubmitOne()}
					>
						Convert
					</Button>
				</CardContent>
			</Card>
		</Container>
	);
}
