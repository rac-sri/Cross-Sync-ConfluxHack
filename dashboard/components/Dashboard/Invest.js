import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { depositToThePool } from '../../utils/ethereum/utils/user.ts';
import { depositToThePool as depositConflux } from '../../utils/conflux/user.ts';
import loadBlockchain from '../../utils/ethereum/loadBlockchainData.ts';

const Invest = () => {
	const [eth, updateETH] = useState(0);
	const [CFX, updateCFX] = useState(0);

	const onSubmitCFX = async () => {
		console.log(eth, CFX);
		const reciept = await depositConflux(CFX);
		console.log(reciept);
	};

	const onSubmitETH = async () => {
		console.log(eth, CFX);
		const { Contract, accounts } = await loadBlockchain();
		depositToThePool(Contract, accounts, eth);
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
						label="Deposit CFX"
						variant="outlined"
						margin="dense"
						onChange={(e) => updateCFX(e.target.value)}
					/>
					<br />
					<Button
						variant="contained"
						color="primary"
						onClick={() => onSubmitCFX()}
					>
						Deposit
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Invest;
