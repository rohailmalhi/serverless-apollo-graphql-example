
import pg from 'pg'
import { Sequelize, Dialect } from "sequelize";

const {
  SLS_APOLLO_DB_USERNAME: DB_USERNAME,
  SLS_APOLLO_DB_PASSWORD: DB_PASSWORD,
  SLS_APOLLO_DB_NAME: DB_NAME,
  SLS_APOLLO_DB_HOSTNAME: DB_HOSTNAME,
  SLS_APOLLO_DB_PORT: DB_PORT,
  DB_DIALECT,
  DB_MIN_CONNECTIONS_POOL,
  DB_MAX_CONNECTIONS_POOL,
  DB_CONNECTION_IDLE_TIME,
  DB_CONNECTION_ACQUIRE_TIME,
  } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOSTNAME,
    port: Number(DB_PORT),
    dialect: 'postgres' as Dialect,
    dialectModule: pg,
    logging: process.env.NODE_ENV !== 'test',
    pool: {
      min: parseInt(DB_MIN_CONNECTIONS_POOL) || 1,
      max: parseInt(DB_MAX_CONNECTIONS_POOL) || 10,
      idle: parseInt(DB_CONNECTION_IDLE_TIME) || 20000,
      acquire: parseInt(DB_CONNECTION_ACQUIRE_TIME) || 20000,
    },
    define: {
      underscored: false,
      timestamps: false,
      paranoid: true,
      // Explicility adding mapping of sequelize timestamp attributes to the database columns
      // https://github.com/sequelize/sequelize/issues/11225
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'deleted_at',
    },
});

export const db = {
    sequelize,
    Sequelize,
    transaction: sequelize.transaction.bind(sequelize),
};