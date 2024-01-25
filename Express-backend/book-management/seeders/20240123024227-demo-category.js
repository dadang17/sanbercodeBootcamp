"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Categories", [
      {
        name: "Adventure",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fantasy",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Romance",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Drama",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Sejarah",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
