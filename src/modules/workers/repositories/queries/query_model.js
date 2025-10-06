const joi = require("joi");

const getWorkerByUserIdParamType = joi.object({
  user_id: joi.string().required(),
});

module.exports = {
  getWorkerByUserIdParamType,
};
