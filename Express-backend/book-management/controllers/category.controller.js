const models = require("../models");
const { Category } = models;

module.exports = {
  getAllCategory: async (req, res) => {
    const category = await Category.findAll();
    res.json({
      message: "Success get data",
      data: category,
    });
  },

  getCategoryByID: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    res.json({
      message: "succes get data",
      data: category,
    });
  },

  addCategory: async (req, res) => {
    const data = req.body;

    const category = await Category.create(data);
    res.json({
      message: "succes create data",
      data: category,
    });
  },

  deleteCategoryByID: async (req, res) => {
    const { id } = req.params;

    await Category.destroy({ where: { id: id } });

    res.status(200).send("User deleted");
  },

  updateCategoryByID: async (req, res) => {
    const { id } = req.params;

    await Category.update(req.body, { where: { id: id } });

    const category = await Category.findByPk(id);

    res.json({
      message: "succes update data",
      data: category,
    });
  },
};
