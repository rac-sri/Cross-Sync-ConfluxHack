import React, { Fragment } from 'react';

import { makeStyles, Paper } from '@material-ui/core';

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

	// const [email, setEmail] = useState('');
	// const [link, setLink] = useState('');
	// const [ethAdd, setEthAdd] = useState('');
	// const [oneAdd, setOneAdd] = useState('');

	return (
		<Fragment>
			<div className={classes.parent_div}>
				<Paper elevation={3} variant="elevation"></Paper>
			</div>
		</Fragment>
	);
};

export default Register;
