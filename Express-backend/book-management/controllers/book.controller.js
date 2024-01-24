const models = require("../models");
const { Sequelize, Op } = require("sequelize");
const { Book } = models;

module.exports = {
  getAllBook: async (req, res) => {
    const where = {};
    const { title, minYear, maxYear, minPage, maxPage } = req.query;

    const sort = req.query.sortByTitle;
    if (title) where.title = { [Sequelize.Op.substring]: title };
    if (minYear) where.release_year = { [Sequelize.Op.gte]: minYear };
    if (maxYear) where.release_year = { [Sequelize.Op.lte]: maxYear };
    if (minPage) where.total_page = { [Sequelize.Op.gte]: minPage };
    if (maxPage) where.total_page = { [Sequelize.Op.lte]: maxPage };
    // if(sortByTitle) where.title = {[Sequelize.order]}
    // console.log(req.query);

    if (Object.keys(req.query).length != 0) {
      const books = await Book.findAll({
        where: {
          ...where,
        },
        order: [["title", sort]],
      });

      res.json({
        message: "Success get data",
        data: books,
      });
    } else {
      const books = await Book.findAll();
      res.json({
        message: "Success get data",
        data: books,
      });
    }
  },

  getBookByID: async (req, res) => {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    res.json({
      message: "succes get data",
      data: books,
    });
  },

  addBook: async (req, res) => {
    const data = req.body;
    const totalPage = req.body.total_page;

    if (totalPage <= 100) {
      data.thickness = "tipis";
    } else if (totalPage > 100 && totalPage < 201) {
      data.thickness = "sedang";
    } else {
      data.thickness = "tebal";
    }

    const books = await Book.create(data);
    res.json({
      message: "succes create data",
      data: books,
    });
  },

  deleteBookByID: async (req, res) => {
    const { id } = req.params;

    await Book.destroy({ where: { id: id } });

    res.status(200).send("User deleted");
  },

  updateBookByID: async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const totalPage = req.body.total_page;

    if (totalPage) {
      console.log("perubahan total page");
      if (totalPage <= 100) {
        data.thickness = "tipis";
      } else if (totalPage > 100 && totalPage < 201) {
        data.thickness = "sedang";
      } else {
        data.thickness = "tebal";
      }
    }
    console.log(data.thickness);
    await Book.update(data, { where: { id: id } });

    const books = await Book.findByPk(id);

    res.json({
      message: "succes update data",
      data: books,
    });
  },
};
