import React from 'react';
import Lottie from 'react-lottie';
import animation from './design2.json';

const Design2 = () => {
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
			<Lottie
				options={options}
				height={500}
				width={500}
				style={{ display: 'block' }}
			/>
		</>
	);
};

export default Design2;
