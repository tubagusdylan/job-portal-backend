const Domain = require("./domain");
const config = require("../../../../config/global_config");
const DB = require("../../../../helpers/databases/postgresql/db");
const db = new DB(config.get("/postgresqlUrl"));
const domain = new Domain(db);

const updateOneWorker = async (payload) => {
  return domain.updateOneWorker(payload);
};

module.exports = {
  updateOneWorker,
};
