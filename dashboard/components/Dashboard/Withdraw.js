import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { refundMoney } from '../../utils/ethereum/utils/user.ts';
import { refundMoney as refundCFX } from '../../utils/conflux/user.ts';
import loadBlockchain from '../../utils/ethereum/loadBlockchainData.ts';

const Invest = () => {
	const [eth, updateETH] = useState(0);
	const [cfx, updateCFX] = useState(0);

	const onSubmitCFX = async () => {
		const reciept = await refundCFX(cfx);
		console.log(reciept);
	};

	const onSubmitETH = async () => {
		const { Contract, accounts } = await loadBlockchain();
		const reciept = await refundMoney(Contract, accounts, eth);
		console.log(reciept);
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
						label="Withdraw ETH"
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
						Withdraw
					</Button>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<TextField
						id="outlined-basic"
						label="Withdraw CFX"
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
						Withdraw
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Invest;
