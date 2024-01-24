const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const bookRouter = require("./book.router");
const categoryRouter = require("./category.router");

router.use("/users", userRouter);
router.use("/books", bookRouter);
router.use("/categories", categoryRouter);

module.exports = router;
