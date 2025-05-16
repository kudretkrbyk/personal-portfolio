const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");
const { verifyToken } = require("../middleware/authMiddleware");

const {
  getAll,
  deleteById,
  getById,
  addData,
  updateById,
} = require("../controllers/projectController");

// 👇 Burada upload middleware'ini ekledik
router.get("/", getAll);
router.post("/", verifyToken, upload.single("image"), addData);
router.get("/:id", verifyToken, getById);
router.put("/:id", verifyToken, updateById);
router.delete("/:id", verifyToken, deleteById);

module.exports = {
  projectsRoutes: router,
};
