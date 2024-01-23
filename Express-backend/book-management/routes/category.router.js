const express = require("express");
const router = express.Router();

const {
  getAllCategory,
  getCategoryByID,
  addCategory,
  deleteCategoryByID,
  updateCategoryByID,
} = require("../controllers/category.controller");

router.get("/", getAllCategory);
router.get("/:id", getCategoryByID);
router.post("/", addCategory);
router.delete("/:id", deleteCategoryByID);
router.patch("/:id", updateCategoryByID);

module.exports = router;
