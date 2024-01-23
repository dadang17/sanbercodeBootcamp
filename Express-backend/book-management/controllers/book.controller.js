const models = require("../models");
const { Book } = models;

module.exports = {
  getAllBook: async (req, res) => {
    const books = await Book.findAll();
    res.json({
      message: "Success get data",
      data: books,
    });
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

    await Book.update(req.body, { where: { id: id } });

    const books = await Book.findByPk(id);

    res.json({
      message: "succes update data",
      data: books,
    });
  },
};
