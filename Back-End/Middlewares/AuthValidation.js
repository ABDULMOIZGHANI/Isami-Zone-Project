import Joi from "joi";

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    gender: Joi.string().valid("male", "female").required(),
    age: Joi.number().integer().min(4).max(100).required(),
    country: Joi.string().required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    whatsappNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    language: Joi.string().required(),
    underWhichTeacher: Joi.string().required(),
    studentDescription: Joi.string().min(10).max(500).required(),
    hearAboutUS: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  next();
};

export { signupValidation, loginValidation };
