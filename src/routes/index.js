const users = require("./users");
const recruiters = require("./recruiters");
const jobposts = require("./jobposts");
const workers = require("./workers");

module.exports = (server) => {
  users(server);
  recruiters(server);
  jobposts(server);
  workers(server);
};
