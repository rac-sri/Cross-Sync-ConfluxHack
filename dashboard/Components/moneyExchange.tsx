import React, { useEffect, useState } from 'react';
import loadBlockchainData from '../utils/ethereum/loadBlockchainData.ts';
// import { depositToThePool, refundMoney } from '../utils/ethereum/utils/user.ts';
import fetchingData from '../utils/ethereum/utils/fetchData.ts';

interface Props {}

type BlockchainData = {
	accounts: Array<String>;
	Contract: any;
};

const MoneyExchange: React.FunctionComponent<Props> = () => {
	const [data, updateData] = useState<BlockchainData>({
		accounts: [],
		Contract: {},
	});

	useEffect(() => {
		async function getDetails() {
			const values = await loadBlockchainData();
			const value = await fetchingData('getMoney', values.Contract);
			console.log('dsjfknsdjkgfnsjkdg' + value);
		}
		getDetails();
	});
	return <div>dsfsafas</div>;
};

export default MoneyExchange;
