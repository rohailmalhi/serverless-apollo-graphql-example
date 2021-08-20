'use strict';

module.exports = {
  up: async (queryInterface, sequelizeDataTypes) => {
    await queryInterface.createTable('trips', { 
      'id': {
        type: sequelizeDataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      'launch_id' : {
        type: sequelizeDataTypes.INTEGER,
      },
      'user_id' : {
        type: sequelizeDataTypes.INTEGER,
        allowNull: false,
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trips');
  }
};
