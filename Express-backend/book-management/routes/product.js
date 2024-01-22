const express = require("express");
const router = express.Router();

const connection = require("../config/db");

router.get("/", (req, res) => {
  connection.query("SELECT * FROM `student`", function (err, result, fields) {
    console.log(result);
    console.log(fields);

    res.json({
      message: "success get data",
      data: result,
    });
  });
});

module.exports = router;
