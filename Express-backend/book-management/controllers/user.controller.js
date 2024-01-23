const models = require("../models");
const { User } = models;

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.findAll();
    res.json({
      message: "Success get data",
      data: users,
    });
  },

  getUserByID: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.json({
      message: "succes get data",
      data: user,
    });
  },

  addUser: async (req, res) => {
    const data = req.body;

    const user = await User.create(data);
    res.json({
      message: "succes create data",
      data: user,
    });
  },

  deleteUserByID: async (req, res) => {
    const { id } = req.params;

    await User.destroy({ where: { id: id } });

    res.status(200).send("User deleted");
  },

  updateUserByID: async (req, res) => {
    const { id } = req.params;

    await User.update(req.body, { where: { id: id } });

    const user = await User.findByPk(id);

    res.json({
      message: "succes update data",
      data: user,
    });
  },
};
