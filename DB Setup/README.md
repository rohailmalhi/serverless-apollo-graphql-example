

# Database Setup for Serverless GraphQL Apollo Example ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

This is a basic sequelize based migration project to kitstart your Serverless GraphQL project.

## Prerequistes 🚁

* Setup PostgreSQL Database
* Create a Database
* Setup Environment Variable in machine

## Setup Enviroment Variables

* SLS_APOLLO_DB_NAME : DatabaseName 
* SLS_APOLLO_DB_PORT : Database port e.g. 5432
* SLS_APOLLO_DB_HOSTNAME : Database hostname e.g. localhost
* SLS_APOLLO_DB_USERNAME : Database username
* SLS_APOLLO_DB_PASSWORD : Database username

## How to get started 🎮

Install Sequelize CLI globally:

```
npm i -g sequelize-cli
```

Install NPX globally:

```
npm i -g npx
```

Move into the project folder:

```
$ cd "DB Setup"
```

Then Install all its dependancies:

```
$ npm install
```

Then you should be able to migrate the datatables to locally create database:

```
$ npx sequelize db:migrate --env local 
```
