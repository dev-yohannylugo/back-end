/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

/** @type {import('sequelize-cli').Migration} */
const rents = require('./rents.json');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rents', rents, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rents', null, {});
  },
};
