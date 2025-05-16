const express = require("express");
const router = express.Router();
const {
  getAll,
  getBySlug,
  getById,
  addData,
  updateById,
  deleteById,
} = require("../controllers/blogController");
const Blog = require("../models/blog");
router.get("/", getAll).post("/", addData);
router
  .get("/:id", getById)
  .get("/:slug", getBySlug)
  .put("/:id", updateById)
  .delete("/:id", deleteById);

module.exports = { blogRoutes: router };
