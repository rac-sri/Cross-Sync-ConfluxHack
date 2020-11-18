import React, { Fragment } from 'react';
import {
	AppBar,
	Container,
	makeStyles,
	Toolbar,
	Typography,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
	},
	title: {
		flex: 1,
	},
	navbar: {
		minWidth: '80%',
	},
}));

const Navbar = () => {
	const classes = useStyles();
	return (
		<Fragment>
			<div className={classes.root}>
				<AppBar position="static">
					<Container className={classes.navbar}>
						<Toolbar>
							<Typography
								variant="h6"
								align="left"
								className={classes.title}
							>
								Cross-Sync
							</Typography>
						</Toolbar>
					</Container>
				</AppBar>
			</div>
		</Fragment>
	);
};

export default Navbar;
