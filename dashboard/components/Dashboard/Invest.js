import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { contract } from '../../utils/harmony/wallet.ts';
import { deposit } from '../../utils/harmony/utils/user.ts';
import { depositToThePool as ethDeposit } from '../../utils/ethereum/utils/user.ts';
import ethereum from '../../utils/ethereum/loadBlockchainData.ts';

const Invest = () => {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);

	const onSubmitOne = async () => {
		console.log(eth, one);
		const contractInstance = await contract();
		deposit(contractInstance, one);
	};

	const onSubmitETH = async () => {
		console.log(eth, one);
		const contractInstance = await ethereum();
		console.log(contractInstance);
		ethDeposit(contractInstance.Contract, contractInstance.accounts, eth);
	};

	return (
		<Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-around',
					paddingTop: '20%',
				}}
			>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<TextField
						id="outlined-basic"
						label="Deposit ETH"
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
						Deposit
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<TextField
						id="outlined-basic"
						label="Deposit ONE"
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
						Deposit
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Invest;
