'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('Users', 'first_name', {
        type: Sequelize.STRING,
      }),
        await queryInterface.addColumn('Users', 'last_name', {
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
      await queryInterface.removeColumn('Users', 'first_name');
      await queryInterface.removeColumn('Users', 'last_name');
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
