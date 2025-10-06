const Domain = require("./domain");
const config = require("../../../../config/global_config");
const DB = require("../../../../helpers/databases/postgresql/db");
const db = new DB(config.get("/postgresqlUrl"));
const domain = new Domain(db);

const getWorkerByUserId = async (payload) => {
  return domain.getWorkerByUserId(payload);
};

module.exports = {
  getWorkerByUserId,
};
