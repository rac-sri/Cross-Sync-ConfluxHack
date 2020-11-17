import Web3 from 'web3';

const overheadPercentageValue = async (
	Contract: any,
	value: Number,
	overHeadPercent: Number
) => {
	const result = await Contract.methods
		.overheadPercentageValue(
			Web3.utils.toWei(value.toString()),
			overHeadPercent.toString()
		)
		.call();
	console.log(Web3.utils.fromWei(result.toString()));
	return Web3.utils.fromWei(result.toString());
};

export { overheadPercentageValue };
