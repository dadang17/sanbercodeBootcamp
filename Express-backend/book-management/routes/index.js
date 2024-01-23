const express = require("express");
const router = express.Router();

const userRouter = require("./user.router");
const bookRouter = require("./book.router");
const categoryRouter = require("./category.router");

router.use("/user", userRouter);
router.use("/book", bookRouter);
router.use("/category", categoryRouter);

module.exports = router;
