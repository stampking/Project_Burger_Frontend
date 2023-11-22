import Joi from "joi";


// const registerSchema = Joi.object({
//     firstName: Joi.string().trim().required(),
//     lastName: Joi.string().trim().required(),
//     email: Joi.alternatives([Joi.string().email({ tlds: false })])
//         .required()
//         .strip(),
//     password: Joi.string()
//         .pattern(/^[a-zA-Z0-9]{6,30}$/)
//         .trim()
//         .required(),
//     confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
// });

const loginSchema = Joi.object({
    email: Joi.alternatives([
        Joi.string()
            .trim()
            .email({ tlds: { allow: ["com"] } })
            .pattern(/@(gmail|hotmail)\.com$/),

    ]),
    password: Joi.string()
        .trim()
        .pattern(/^[a-zA-Z0-9]{6,30}$/),
});

export default { loginSchema };
