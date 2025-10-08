const Domain = require("./domain");
const config = require("../../../../config/global_config");
const DB = require("../../../../helpers/databases/postgresql/db");
const db = new DB(config.get("/postfresqlUrl"));
const domain = new Domain(db);

const getRecruiterByUserId = async (payload) => {
    return domain.getRecruiterByUserId(payload);
};



module.exports = {
    getRecruiterByUserId,
}