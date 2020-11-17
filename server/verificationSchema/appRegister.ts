import * as Joi from 'joi';

interface Iregister {
	link: string;
	email: string;
	ethAdd: string;
	oneAdd: string;
}

const register = (body: Iregister) => {
	const schema: Joi.ObjectSchema<Iregister> = Joi.object({
		link: Joi.string().required().max(250).min(3).trim(),
		email: Joi.string().email().max(250).required(),
		ethAdd: Joi.string().required(),
		oneAdd: Joi.string().required(),
	});

	return schema.validate(body);
};

export { register, Iregister };
