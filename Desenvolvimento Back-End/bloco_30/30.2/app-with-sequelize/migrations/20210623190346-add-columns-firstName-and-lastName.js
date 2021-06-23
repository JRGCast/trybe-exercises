'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('Users', 'firstName', {
        type: Sequelize.STRING,
      }),
        await queryInterface.addColumn('Users', 'lastName', {
          type: Sequelize.STRING,
        });
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }

    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.removeColumn('Users', 'fistName');
      await queryInterface.removeColumn('Users', 'lastName');
      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
