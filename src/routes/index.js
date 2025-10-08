const users = require("./users");
const recruiters = require("./recruiters");

module.exports = (server) => {
  users(server);
  recruiters(server);
};
