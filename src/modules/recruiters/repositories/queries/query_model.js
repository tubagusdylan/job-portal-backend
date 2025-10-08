const joi = require("joi");

const getRecruiterByUserIdParamType = joi.object({
    user_id: joi.string().required(),
});
module.exports = {
    getRecruiterByUserIdParamType,
}