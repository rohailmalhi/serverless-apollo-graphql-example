

# Serverless Apollo GraphQL Example ![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

This is a basic TypeScript boilerplate to kitstart your Serverless GraphQL projects with AWS Lambda. Here is a [plain JavaScript starter](https://github.com/pimp-my-book/serverless-graphql-nodejs-starter) if you prefer!

It is powered by [`Apollo-Server-Lambda`](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-lambda) and uses the [Serverless Framework](https://serverless.com/) to deploy it to AWS.

This is hugely inspired by the starter that [Anomaly Innovations](https://github.com/AnomalyInnovations/serverless-nodejs-starter ) created. The project was cloned from it. 

## Prerequistes 🚁

* [An AWS Account](https://aws.amazon.com/)
* [A configured AWS CLI](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
* [Serverless Framework installed on your machine](https://serverless.com/framework/docs/providers/aws/guide/installation/)
* [NodeJS](nodejs.org) 

## How to get started 🎮

First clone the repo:

```
$ serverless install --url https://github.com/rohailmalhi/serverless-apollo-graphql-example --name project-name
```

Move into the project folder:

```
$ cd project-name
```

Then Install all its dependancies:

```
$ npm install
```

Then you should be able to invoke the Lambda locally:

```
$ npm run offline
```

To deploy to AWS run the following command:

```
$ npm run deploy
```

This should be a good start to be able to move on and do whatever you gotta do meet business requirements.  


### How To Link Other AWS Services 🗽

#### DynamoDB
#### Cognito

