import React from 'react';
import { Container, Button, Divider } from '@material-ui/core';
import loadBlockchain from '../../utils/ethereum/loadBlockchainData.ts';
import { rewards } from '../../utils/conflux/user.ts';
import { rewards as ethExchange } from '../../utils/ethereum/utils/user.ts';

export default function Convert() {
	const onSubmitETH = async () => {
		const { Contract, accounts } = await loadBlockchain();
		ethExchange(Contract, accounts);
	};

	const onSubmitOne = async () => {
		rewards();
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
				<br />
				<br />
				<Button
					variant="contained"
					color="primary"
					onClick={() => onSubmitETH()}
				>
					Collect reward and Withdraw from CFX Pool
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
				<Button
					variant="contained"
					color="primary"
					onClick={() => onSubmitOne()}
				>
					Collect reward and Withdraw from ETH Pool
				</Button>
			</div>
		</Container>
	);
}
