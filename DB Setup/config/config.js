
const {
  SLS_APOLLO_DB_USERNAME: username,
  SLS_APOLLO_DB_PASSWORD: password,
  SLS_APOLLO_DB_NAME: databaseName,
  SLS_APOLLO_DB_HOSTNAME: host,
  SLS_APOLLO_DB_PORT: port,
} = process.env;

module.exports = {
  'local': {
    'username': username,
    'password': password,
    'database': databaseName,
    'host': host,
    'port': port,
    'dialect': 'postgres',
    'migrationStorageTableName': 'sequelize_migrations',
    'define': {
      'underscored': true,
      'timestamps': true,
      'paranoid': true,
    },
    'LOG_LEVEL': 'trace',
  },
};
