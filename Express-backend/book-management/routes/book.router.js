const express = require("express");
const router = express.Router();

const {
  validationRelease,
} = require("../middleware/validation/inputValidation");

const {
  getAllBook,
  getBookByID,
  addBook,
  deleteBookByID,
  updateBookByID,
} = require("../controllers/book.controller");

router.get("/", getAllBook);
router.get("/:id", getBookByID);
router.post("/", validationRelease, addBook);
router.delete("/:id", deleteBookByID);
router.patch("/:id", updateBookByID);

module.exports = router;
