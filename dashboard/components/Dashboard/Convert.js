import React, { useState } from 'react';
import {
	Card,
	Container,
	CardContent,
	TextField,
	Button,
} from '@material-ui/core';

export default function Convert() {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);
	const [, updateETHAdd] = useState('0x');
	const [, updateOneAdd] = useState('0x');

	const onSubmitETH = async () => {
		console.log(eth);
	};

	const onSubmitOne = async () => {
		console.log(eth, one);
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
						label="Get CRX Token"
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
