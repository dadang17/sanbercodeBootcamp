const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  addUser,
  deleteUserByID,
  updateUserByID,
} = require("../controllers/user.controller");

const { verifyToken } = require("../middleware/authentication/auth.token");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/", verifyToken, addUser);
router.delete("/:id", verifyToken, deleteUserByID);
router.patch("/:id", verifyToken, updateUserByID);

module.exports = router;
