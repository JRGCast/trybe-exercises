'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const firstData = [
      {
        first_name: 'Leonardo',
        last_name: 'Demonful',
        get full_name() { return `${this.firstName} ${this.lastName}`; },
        email: 'leozindemo@gmail.com',
        phone_num: '1234',
        // createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), // mudou para snake case
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'), // mudou para snake case
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        first_name: 'Joseph',
        last_name: 'Pelintro',
        get full_name() { return `${this.first_name} ${this.last_name}`; },
        email: 'josep@gmail.com',
        phone_num: '4567',
        // createdAt: Sequelize.literal('CURRENT_TIMESTAMP'), // mudou para snake case
        // updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'), // mudou para snake case
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ];
    return queryInterface.bulkInsert('Users', firstData, {});
  },
  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     /**
//      * Add seed commands here.
//      *
//      * Example:
//      * await queryInterface.bulkInsert('People', [{
//      *   name: 'John Doe',
//      *   isBetaMember: false
//      * }], {});
//     */
//   },

//   down: async (queryInterface, Sequelize) => {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
