const models = require("../models");
const { Sequelize, Op } = require("sequelize");
const { Category, Book } = models;

module.exports = {
  getAllCategory: async (req, res) => {
    const where = {};
    const { name } = req.query;

    const sort = req.query.sortByName;
    if (name) where.name = { [Sequelize.Op.substring]: name };
    if (Object.keys(req.query).length != 0) {
      const category = await Category.findAll({
        where: {
          ...where,
        },
        order: [["name", sort]],
      });

      res.json({
        message: "Success get data",
        data: category,
      });
    } else {
      const category = await Category.findAll();
      res.json({
        message: "Success get data",
        data: category,
      });
    }
  },

  getBookByCategoryId: async (req, res) => {
    const { id } = req.params;
    // const { books } = req.params;
    // console.log(books);
    const where = {};
    const { title, minYear, maxYear, minPage, maxPage } = req.query;
    let sort = req.query.sortByTitle;
    if (sort == null) {
      sort = "asc";
    }
    if (title) where.title = { [Sequelize.Op.substring]: title };
    if (minYear) where.release_year = { [Sequelize.Op.gte]: minYear };
    if (maxYear) where.release_year = { [Sequelize.Op.lte]: maxYear };
    if (minPage) where.total_page = { [Sequelize.Op.gte]: minPage };
    if (maxPage) where.total_page = { [Sequelize.Op.lte]: maxPage };

    console.log(Object.keys(req.query).length);

    if (Object.keys(req.query).length != 0) {
      try {
        const category = await Category.findOne({
          where: { id: id },
          include: [
            {
              model: Book,
              where: {
                ...where,
              },
            },
          ],
          order: [[{ model: Book }, "title", sort]],
        });
        res.json({
          message: "succes get data",
          data: category,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const category = await Category.findOne({
          where: { id: id },
          include: [{ model: Book }],
        });
        console.log(category);
        res.json({
          message: "succes get data",
          data: category,
        });
      } catch (error) {
        console.log(error);
      }
    }
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
