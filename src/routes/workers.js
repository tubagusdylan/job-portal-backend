const verifyToken = require("../middlewares/verifyToken");
const workerHandler = require("../modules/workers/handlers/api_handler");

module.exports = (server) => {
  server.get("/api/v1/users/:user_id/workers", verifyToken, workerHandler.getWorkerByUserId);
  server.put("/api/v1/users/:user_id/workers/:id", verifyToken, workerHandler.updateOneWorker);
  server.put("/api/v1/users/workers/me", verifyToken, workerHandler.updateSelfWorker);
};
