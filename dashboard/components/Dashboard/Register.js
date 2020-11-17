import React, { Fragment, useState } from 'react';
import axios from 'axios';

import {
	Box,
	Button,
	Grid,
	makeStyles,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';

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

	const [email, setEmail] = useState('');
	const [link, setLink] = useState('');
	const [ethAdd, setEthAdd] = useState('');
	const [oneAdd, setOneAdd] = useState('');

	const emailChange = (e) => {
		setEmail(e.target.value);
	};

	const linkChange = (e) => {
		setLink(e.target.value);
	};

	const ethChange = (e) => {
		setEthAdd(e.target.value);
	};

	const oneChange = (e) => {
		setOneAdd(e.target.value);
	};

	const submit = async (e) => {
		e.preventDefault();
		const data = await axios.post('http://localhost:5000/api/new', {
			email,
			link,
			ethAdd,
			oneAdd,
		});
		console.log(data);
	};

	return (
		<Fragment>
			<div className={classes.parent_div}>
				<Paper elevation={3} variant="elevation">
					<Grid
						container
						direction="row"
						justify="space-around"
						alignItems="stretch"
						spacing={3}
						className={classes.parent_grid}
					>
						<Grid
							item
							xs={7}
							container
							spacing={3}
							direction="column"
							justify="space-around"
							alignItems="stretch"
						>
							<Grid item>
								<Box
									bgcolor="text.primary"
									color="background.paper"
									className={classes.link_box}
								>
									<div className={classes.cover_div}>
										Embed Link for your App.
									</div>
								</Box>
							</Grid>
							<Grid item>
								<Box className={classes.iframe_box}>
									<div className={classes.cover_div}></div>
								</Box>
							</Grid>
						</Grid>
						<Grid
							item
							xs={5}
							container
							direction="column"
							justify="space-around"
							alignItems="stretch"
							spacing={3}
						>
							<Grid item>
								<Typography variant="h6" align="center">
									Register your App.
								</Typography>
							</Grid>
							<Grid item>
								<TextField
									fullWidth
									required
									variant="outlined"
									size="small"
									type="string"
									placeholder="Enter Link to your app or organization"
									label="Link to organization"
									name="link"
									value={link}
									onChange={linkChange}
								/>
							</Grid>

							<Grid item>
								<TextField
									fullWidth
									required
									variant="outlined"
									size="small"
									type="string"
									placeholder="Enter an email to connect"
									label="Email"
									name="email"
									value={email}
									onChange={emailChange}
								/>
							</Grid>

							<Grid item>
								<TextField
									fullWidth
									required
									variant="outlined"
									size="small"
									type="string"
									placeholder="Enter Eth Address"
									label="Eth Address"
									name="ethAddress"
									value={ethAdd}
									onChange={ethChange}
								/>
							</Grid>

							<Grid item>
								<TextField
									fullWidth
									required
									variant="outlined"
									size="small"
									type="string"
									placeholder="Enter One Address"
									label="One Address"
									name="oneAddress"
									value={oneAdd}
									onChange={oneChange}
								/>
							</Grid>

							<Grid item className={classes.button_container}>
								<Button
									variant="outlined"
									color="primary"
									onClick={submit}
								>
									Register
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</Fragment>
	);
};

export default Register;
