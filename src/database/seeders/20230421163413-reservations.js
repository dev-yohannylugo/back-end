/* eslint-disable @typescript-eslint/no-var-requires */
'use strict';

/** @type {import('sequelize-cli').Migration} */
const reservations = require('./reservations.json');
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reservations', reservations, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reservations', null, {});
  },
};
