const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { verifyToken } = require("../middleware/authMiddleware");

const {
  getAll,
  getBySlug,
  getById,
  addData,
  updateById,
  deleteById,
} = require("../controllers/blogController");
const Blog = require("../models/blog");
router.get("/", getAll).post("/", verifyToken, upload.single("image"), addData);
router
  .get("/slug/:slug", getBySlug)
  .get("/:id", verifyToken, getById)
  .put("/:id", verifyToken, updateById)
  .delete("/:id", verifyToken, deleteById);

module.exports = { blogRoutes: router };
