const express = require("express");
const router = express.Router();

const {
  validationRelease,
} = require("../middleware/validation/inputValidation");
const { verifyToken } = require("../middleware/authentication/auth.token");

const {
  getAllBook,
  getBookByID,
  addBook,
  deleteBookByID,
  updateBookByID,
} = require("../controllers/book.controller");

router.get("/", getAllBook);
router.get("/:id", getBookByID);
router.post("/", verifyToken, validationRelease, addBook);
router.delete("/:id", verifyToken, deleteBookByID);
router.patch("/:id", verifyToken, updateBookByID);

module.exports = router;
