'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const firstData = [
      {
        firstName: 'Leonardo',
        lastName: 'Demonful',
        get fullName() { return `${this.firstName} ${this.lastName}`; },
        email: 'leozindemo@gmail.com',
        phone_num: '1234',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        firstName: 'Joseph',
        lastName: 'Pelintro',
        get fullName() { return `${this.firstName} ${this.lastName}`; },
        email: 'josep@gmail.com',
        phone_num: '4567',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
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
