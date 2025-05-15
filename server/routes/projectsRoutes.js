const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middleware/authMiddleware");

const {
  getAll,
  deleteById,
  getById,
  addData,
  updateById,
} = require("../contollers/projectController");
router.get("/", getAll).post("/", verifyToken, addData);
router
  .get("/:id", verifyToken, getById)
  .put("/:id", verifyToken, updateById)
  .delete("/:id", verifyToken, deleteById);

module.exports = {
  projectsRoutes: router,
};
