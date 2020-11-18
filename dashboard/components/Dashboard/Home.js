import React, { Fragment, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Navbar from '../Navbar';
import Pool from './Pool';
import Invest from './Invest';
import Withdraw from './Withdraw';
import Convert from './Convert';
import {
	Container,
	AppBar,
	Tab,
	Tabs,
	makeStyles,
	Paper,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	surface: {
		marginTop: '20px',
	},
}));

const Home = () => {
	const classes = useStyles();
	const { page } = useParams();

	const pageToValue = {
		Pool: 0,
		invest: 1,
		withdraw: 2,
		convert: 3,
	};

	const valueToPage = {
		0: 'Pool',
		1: 'invest',
		2: 'withdraw',
		3: 'convert',
	};

	const [tab, setTab] = useState(pageToValue[page]);
	const history = useHistory();

	const onChange = (e, newtab) => {
		e.preventDefault();
		history.push(`/${valueToPage[newtab]}`);
		setTab(newtab);
	};

	const renderPage = () => {
		switch (page) {
			case 'Pool':
				return <Pool />;

			case 'invest':
				return <Invest />;

			case 'withdraw':
				return <Withdraw />;

			case 'convert':
				return <Convert />;

			default:
				return <Pool />;
		}
	};

	return (
		<Fragment>
			<Navbar />
			<Container fixed>
				<Paper elevation={3} variant="outlined" className={classes.surface}>
					<AppBar position="static" color="inherit">
						<Tabs
							value={tab}
							onChange={onChange}
							indicatorColor="primary"
							textColor="primary"
							variant="scrollable"
						>
							<Tab label="Pool" />
							<Tab label="Invest" />
							<Tab label="Withdraw" />
							<Tab label="Convert" />
						</Tabs>
					</AppBar>
				</Paper>
				{renderPage()}
			</Container>
		</Fragment>
	);
};

export default Home;
