const models = require("../models");
const { User } = models;

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll({
      attributes: ["name", "email", "createdAt", "updatedAt"],
    });
    if (users === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(200).json(users);
    }
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    const users = await User.findAll({
      where: { id: id },
      attributes: ["name", "email", "createdAt", "updatedAt"],
    });

    if (users === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(200).json(users);
    }
  },

  addUser: async (req, res) => {
    const data = req.body;

    const users = await User.create(data);
    if (users === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(201).json({
        message: "succes create data",
        data: users,
      });
    }
  },

  deleteUserByID: async (req, res) => {
    const { id } = req.params;

    await User.destroy({ where: { id: id } });

    res.status(200).send("User deleted");
  },

  updateUserByID: async (req, res) => {
    const { id } = req.params;

    await User.update(req.body, { where: { id: id } });

    const users = await User.findByPk(id);

    if (users === null) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
    } else {
      res.status(200).json({
        message: "succes update data",
        data: users,
      });
    }
  },
};
