const basicAuth = require("../middlewares/basicAuth");
const verifyToken = require("../middlewares/verifyToken");
const userHandler = require("../modules/users/handlers/api_handler");

module.exports = (server) => {
  server.get("/api/v1/users/:id", verifyToken, userHandler.getUserById);
  server.delete("/api/v1/users/:id", verifyToken, userHandler.deleteUser);
  server.post("/api/v1/users/register-worker", basicAuth.isAuthenticated, userHandler.registerWorker);
  server.post("/api/v1/users/register-recruiter", basicAuth.isAuthenticated, userHandler.registerRecruiter);
  server.post("/api/v1/users/login", basicAuth.isAuthenticated, userHandler.login);
  server.delete("/api/v1/users/logout", verifyToken, userHandler.logout);
  server.put("/api/v1/users/refresh-token", basicAuth.isAuthenticated, userHandler.refreshToken);
};
