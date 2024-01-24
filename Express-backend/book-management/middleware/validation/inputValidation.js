const { validationResult, check } = require("express-validator");

exports.validationRelease = [
  check("release_year")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .isInt({ min: 1980, max: 2021 })
    .withMessage("Input data in range 1980 - 2021!")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
