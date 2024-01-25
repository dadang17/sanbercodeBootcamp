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
    await queryInterface.bulkInsert("Books", [
      {
        title: "Bumi Manusia",
        description:
          "Novel Bumi Manusia bercerita tentang perjuangan tokoh Minke memperjuangan kedudukan pribumi melawan diskriminasi Belanda pada masa kolonial Belanda di awal abad keduapuluh",
        image_url:
          "https://2.bp.blogspot.com/--tTJ4ScPvRw/WSo5gOVA3eI/AAAAAAAADCk/ppr3H1Oj9rEId1g_cXJ98y6iQnxCW849QCLcB/s1600/1398034._UY1600_SS1600_.jpg",
        release_year: 1980,
        price: "50000",
        total_page: 551,
        thickness: "tebal",
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Laskar Pelangi",
        description:
          "Novel Laskar Pelangi adalah cerita tentang bagiamana kesepuluh anak-anak miskin melayu ini menjalani hidup di tengah segala keterbatasan, namun tetap berani bermimpi. Kisah mereka dipenuhi dengan suka, duka, nestapa, dan tentu saja jenaka.",
        image_url:
          "https://upload.wikimedia.org/wikipedia/id/8/8e/Laskar_pelangi_sampul.jpg",
        release_year: 2005,
        price: "40000",
        total_page: 502,
        thickness: "tebal",
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Negeri 5 Menara",
        description:
          "Novel ini menceritakan tentang kisah seorang anak bernama Alif berasal dari Minangkabau, Bukit Tinggi, Sumatera Barat. Ketika Alif duduk di bangku MTs (setingkat dengan SMP), Alif mempunyai teman bernama Randai. ",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg1PdSdCoDiZfW5YbwBaOqqkr8PdjdcwhoBg&usqp=CAU",
        release_year: 2009,
        price: "45000",
        total_page: 409,
        thickness: "tebal",
        categoryId: 3,
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
