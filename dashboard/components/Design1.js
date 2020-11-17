import React from 'react';
import animation from './design1.json';
import Lottie from 'react-lottie';
import { Grid } from '@material-ui/core';

const Design1 = () => {
	const options = {
		loop: true,
		autoplay: true,
		animationData: animation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<>
			<Grid
				container
				spacing={3}
				direction="row"
				justify="space-evenly"
				alignItems="stretch"
			>
				<Grid item xs={4}>
					<img
						// src={require('../harmony.jpg')}
						// src={}
						height="100%"
						width="100%"
						style={{ objectFit: 'contain' }}
					/>
				</Grid>

				<Grid item xs={4}>
					<Lottie
						options={options}
						height={200}
						width={200}
						style={{ display: 'block' }}
					/>
				</Grid>

				<Grid item xs={4}>
					<img
						// src={require('../eth.jpg')}
						// src={}
						height="100%"
						width="100%"
						style={{ objectFit: 'contain' }}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default Design1;
