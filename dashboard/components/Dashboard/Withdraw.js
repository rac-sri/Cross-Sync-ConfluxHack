import React, { useState } from 'react';
import { TextField, Button, Container } from '@material-ui/core';

const Invest = () => {
	const [eth, updateETH] = useState(0);
	const [one, updateOne] = useState(0);

	const onSubmitOne = async () => {
		console.log(eth, one);
	};

	const onSubmitETH = async () => {
		console.log(eth);
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
						label="Withdraw CRX"
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
