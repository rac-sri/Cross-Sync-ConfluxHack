import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';

const Invest = () => {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);

	const onSubmitOne = async () => {
		console.log(eth, one);
	};

	const onSubmitETH = async () => {
		console.log(eth, one);
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
						label="Deposit CRX"
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
