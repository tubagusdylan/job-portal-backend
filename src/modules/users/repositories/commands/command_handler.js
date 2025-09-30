const Domain = require("./domain");
const config = require("../../../../config/global_config");
const DB = require("../../../../helpers/databases/postgresql/db");
const db = new DB(config.get("/postgresqlUrl"));
const domain = new Domain(db);

const login = async (payload) => {
  return domain.login(payload);
};

const registerWorker = async (payload) => {
  return domain.registerWorker(payload);
};

const registerRecruiter = async (payload) => {
  return domain.registerRecruiter(payload);
};

const logout = async (payload) => {
  return domain.logout(payload);
};

const deleteUser = async (payload) => {
  return domain.deleteUser();
};

const refreshToken = async (payload) => {
  return domain.refreshToken();
};

module.exports = {
  login,
  registerWorker,
  registerRecruiter,
  logout,
  deleteUser,
  refreshToken,
};
