/**
 * Migration - Create Users Table
 */
module.exports = {
  async up (queryInterface, sequelizeDataTypes){
    await queryInterface.createTable('users', {
      'id': {
        type: sequelizeDataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      'email': {
        type: sequelizeDataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      'name': {
        type: sequelizeDataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
      'created_at': {
        type: sequelizeDataTypes.DATE,
        allowNull: false,
      },
      'updated_at': {
        type: sequelizeDataTypes.DATE,
        allowNull: false,
      },
      'deleted_at': {
        type: sequelizeDataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
    });
  },

  async down (queryInterface, sequelizeDataTypes) {
    await queryInterface.dropTable('users');
  }
};
