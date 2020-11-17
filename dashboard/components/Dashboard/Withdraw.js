import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';
import { contract } from '../../utils/harmony/wallet.ts';
import { refundMoney as OneWithdraw } from '../../utils/harmony/utils/user.ts';
import { refundMoney } from '../../utils/ethereum/utils/user.ts';
import ethereum from '../../utils/ethereum/loadBlockchainData.ts';

const Invest = () => {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);

	const onSubmitOne = async () => {
		console.log(eth, one);
		const contractInstance = await contract();
		OneWithdraw(contractInstance, one);
	};

	const onSubmitETH = async () => {
		const contractInstance = await ethereum();
		console.log(eth);
		refundMoney(contractInstance.Contract, contractInstance.accounts, eth);
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
						label="Withdraw ONE"
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
						Withdraw
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Invest;
