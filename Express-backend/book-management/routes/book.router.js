const express = require("express");
const router = express.Router();

const {
  getAllBook,
  getBookByID,
  addBook,
  deleteBookByID,
  updateBookByID,
} = require("../controllers/book.controller");

router.get("/", getAllBook);
router.get("/:id", getBookByID);
router.post("/", addBook);
router.delete("/:id", deleteBookByID);
router.patch("/:id", updateBookByID);

module.exports = router;
