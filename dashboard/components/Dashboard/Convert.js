import React, { useState } from 'react';
import { Container, TextField, Button, Divider } from '@material-ui/core';
import loadBlockchain from '../../utils/ethereum/loadBlockchainData.ts';
import { addExchangeMoney } from '../../utils/conflux/user.ts';
import { addExchangeMoney as ethExchange } from '../../utils/ethereum/utils/user.ts';
import Axios from 'axios';

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
		const data = {
			tx: reciept.transactionHash,
			addr: cfxAdd,
			value: eth,
			addrSelf: accounts[0],
		};
		const result = await Axios.post(
			'http://localhost:5000/blockchain/eth',
			data
		);
		alert(result);
	};

	const onSubmitOne = async () => {
		console.log(eth, one, cfxAdd);
		const reciept = await addExchangeMoney(2, one);
		console.log(reciept);
		const data = {
			addr: ethAdd,
			addrSelf: window.conflux.selectedAddress,
			tx: reciept,
			value: one,
		};

		const result = await Axios.post(
			'http://localhost:5000/blockchain/cfx',
			data
		);
		console.log(result);
		alert(result);
		<Divider />;
	};

	return (
		<Container>
			<br />
			<div
				style={{
					position: 'relative',
					alignContent: 'center',
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'column',
					justifyContent: 'space-around',
				}}
			>
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
				<br />
				<Button
					variant="contained"
					color="primary"
					onClick={() => onSubmitETH()}
				>
					Convert
				</Button>
			</div>
			<br />
			<br />
			<Divider dark />
			<div
				style={{
					position: 'relative',
					alignContent: 'center',
					display: 'flex',
					flexWrap: 'wrap',
					flexDirection: 'column',
					justifyContent: 'space-around',
				}}
			>
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
				<br />
				<Button
					variant="contained"
					color="primary"
					onClick={() => onSubmitOne()}
				>
					Convert
				</Button>
			</div>
		</Container>
	);
}
