import * as mongoose from 'mongoose';

interface Iapp extends mongoose.Document {
	readonly _id: string;
	link: string;
	email: string;
	ethAdd: string;
	oneAdd: string;
	uuid: string | undefined;
	readonly createdAt?: Date;
	readonly updatedAt?: Date;
}

const appSchema: mongoose.Schema = new mongoose.Schema(
	{
		link: {
			type: String,
			minlength: 3,
			maxlength: 250,
			required: true,
		},
		email: {
			type: String,
			minlength: 3,
			maxlength: 250,
			required: true,
		},
		ethAdd: {
			type: String,
			required: true,
		},
		oneAdd: {
			type: String,
			required: true,
		},
		uuid: {
			type: String,
			unique: true,
			default: undefined,
		},
	},
	{ timestamps: true }
);

const AppRegisteration: mongoose.Model<Iapp> = mongoose.model(
	'AppRegisteration',
	appSchema
);
export default AppRegisteration;
