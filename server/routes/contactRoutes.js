const express = require("express");
const router = express.Router();

const {
  getAll,
  deleteById,
  getById,
  addData,
  updateById,
} = require("../contollers/contactController");
router.get("/", getAll).post("/", addData);
router.get("/:id", getById).put("/:id", updateById).delete("/:id", deleteById);

module.exports = {
  contactRoutes: router,
};
