const express = require("express");
const router = express.Router();

const {
  getBookByCategoryId,
  getAllCategory,
  getCategoryByID,
  addCategory,
  deleteCategoryByID,
  updateCategoryByID,
} = require("../controllers/category.controller");
const { verifyToken } = require("../middleware/authentication/auth.token");

router.get("/", getAllCategory);
router.get("/:id", getCategoryByID);
router.post("/", verifyToken, addCategory);
router.delete("/:id", verifyToken, deleteCategoryByID);
router.patch("/:id", verifyToken, updateCategoryByID);
router.get("/:id/books", getBookByCategoryId);

module.exports = router;
