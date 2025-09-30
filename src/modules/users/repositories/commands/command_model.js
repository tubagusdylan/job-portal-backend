const joi = require("joi");

const loginParamType = joi.object({
  username: joi
    .string()
    .required()
    .min(5)
    .max(50)
    .regex(/^[\w]+$/)
    .message("Username must be alphanumeric"),
  password: joi
    .string()
    .required()
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/[0-9]/, "number")
    .pattern(/[!@#$%^&*()_\-+=[\]{};:'",.<>\/?\\|`~]/, "symbol")
    .messages({
      "string.empty": "Password tidak boleh kosong",
      "string.min": "Password minimal {#limit} karakter",
      "string.max": "Password maksimal {#limit} karakter",
      "string.pattern.name": "Password harus mengandung setidaknya satu {#name}",
    }),
});

const registerParamType = joi.object({
  username: joi
    .string()
    .required()
    .min(5)
    .max(50)
    .regex(/^[\w]+$/)
    .message("Username must be alphanumeric"),
  password: joi
    .string()
    .required()
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/[0-9]/, "number")
    .pattern(/[!@#$%^&*()_\-+=[\]{};:'",.<>\/?\\|`~]/, "symbol")
    .messages({
      "string.empty": "Password tidak boleh kosong",
      "string.min": "Password minimal {#limit} karakter",
      "string.max": "Password maksimal {#limit} karakter",
      "string.pattern.name": "Password harus mengandung setidaknya satu {#name}",
    }),
  email: joi
    .string()
    .required()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .message("Email format must be true"),
});

const deleteParamType = joi.object({
  id: joi.string().required(),
  user_online_id: joi.string().required(),
});

const updateUserParamType = joi.object({
  id: joi.string().required(),
  user_id: joi.string().required(),
  username: joi
    .string()
    .optional()
    .min(5)
    .max(50)
    .regex(/^[\w]+$/)
    .message("Username must be alphanumeric"),
  password: joi
    .string()
    .optional()
    .pattern(/[A-Z]/, "uppercase")
    .pattern(/[a-z]/, "lowercase")
    .pattern(/[0-9]/, "number")
    .pattern(/[!@#$%^&*()_\-+=[\]{};:'",.<>\/?\\|`~]/, "symbol")
    .messages({
      "string.empty": "Password tidak boleh kosong",
      "string.min": "Password minimal {#limit} karakter",
      "string.max": "Password maksimal {#limit} karakter",
      "string.pattern.name": "Password harus mengandung setidaknya satu {#name}",
    }),
  email: joi
    .string()
    .optional()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .message("Email format must be true"),
});

const refreshTokenParamType = joi.object({
  token: joi.string().required(),
});

const logoutParamType = joi.object({
  token: joi.string().required(),
});

module.exports = {
  loginParamType,
  registerParamType,
  updateUserParamType,
  deleteParamType,
  refreshTokenParamType,
  logoutParamType,
};
