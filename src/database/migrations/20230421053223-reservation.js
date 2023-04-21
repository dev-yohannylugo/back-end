'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('Reservations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      hour: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Rents',
          key: 'id',
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Reservations');
  },
};
