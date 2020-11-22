import React, { useState } from 'react';
import {
	Card,
	Container,
	CardContent,
	TextField,
	Button,
} from '@material-ui/core';
import loadBlockchain from '../../utils/ethereum/loadBlockchainData.ts';
import { addExchangeMoney } from '../../utils/conflux/user.ts';
import { addExchangeMoney as ethExchange } from '../../utils/ethereum/utils/user.ts';

export default function Convert() {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);
	const [ethAdd, updateETHAdd] = useState('0x');
	const [cfxAdd, updateOneAdd] = useState('0x');

	const onSubmitETH = async () => {
		const { Contract, accounts } = await loadBlockchain();
		console.log(eth, ethAdd);
		const reciept = await ethExchange(Contract, accounts, 2, eth);
		console.log(reciept);
	};

	const onSubmitOne = async () => {
		console.log(eth, one, cfxAdd);
		const reciept = await addExchangeMoney(2, one);
		console.log(reciept);
	};

	return (
		<Container>
			<br />
			<Card>
				<CardContent>
					<h2> ETH to CFX</h2>
					<br />
					<TextField
						id="outlined-basic"
						label="CFX Address"
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
					<h2>CFX to ETH</h2>
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
						label="Get CFX Token"
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
