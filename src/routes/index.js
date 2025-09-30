const example = require("./example");
const users = require("./users");

module.exports = (server) => {
  example(server);
  users(server);
};
