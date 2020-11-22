import React, { Fragment, useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core';
// import fetchCFX from '../../utils/conflux/fetchData.ts';
import { getUserDetails } from '../../utils/conflux/fetchData.ts';
import { getUserDetails as ethGetUserData } from '../../utils/ethereum/utils/fetchData.ts';
import Table from './Table';
// import fetchETH from '../../utils/ethereum/utils/fetchData.ts';
import loadBlockchain from '../../utils/ethereum/loadBlockchainData.ts';

const useStyles = makeStyles(() => ({
	parent_div: {
		marginTop: '25px',
	},
	outer_div: {
		justifyContent: 'space-between',
	},
	parent_grid: {
		padding: '10px',
	},
	button_container: {
		display: 'grid',
		placeItems: 'center',
	},
	link_box: {
		minHeight: '150px',
		width: '100%',
		borderRadius: '15px',
	},
	iframe_box: {
		minHeight: '200px',
		width: '100%',
		borderRadius: '15px',
		border: 'solid',
	},
	cover_div: {
		padding: '15px',
	},
}));

const Register = () => {
	const classes = useStyles();
	const [eth, updateEth] = useState({});
	const [cfx, updateCrx] = useState({});

	useEffect(() => {
		const load = async () => {
			const { Contract, accounts } = await loadBlockchain();
			const eth = await ethGetUserData(Contract, accounts);
			updateEth(eth);
			window.conflux.enable();
			console.log('here');
			const cfxvAL = await getUserDetails();
			updateCrx(cfxvAL);
			console.log(eth, cfx);
		};
		load();
	}, []);
	return (
		<Fragment>
			<div className={classes.parent_div}>
				<Table row={eth} />
			</div>
			<div className={classes.parent_div}>
				<Table row={cfx} />
			</div>
		</Fragment>
	);
};

export default Register;
