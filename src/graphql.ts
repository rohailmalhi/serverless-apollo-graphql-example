
import { ApolloServer } from "apollo-server-lambda";
import { Context, Callback, APIGatewayEvent } from "aws-lambda"
import { ITypeDefinitions } from "graphql-tools/dist/Interfaces"

import { schema } from "src/schema";
import { resolvers } from "src/resolvers";
import LaunchAPI  from 'src/datasources/launches'
import Users  from 'src/datasources/users'

import { db } from 'src/models/index';
const { sequelize } = db;

const typeDef: ITypeDefinitions = schema
const server = new ApolloServer({
	typeDefs: typeDef,
	resolvers: resolvers,
	dataSources: () => ({
		launchApi: new LaunchAPI(),
		user: new Users({sequelize}),
	}),
	formatError: error => {
		return error;
	},
	formatResponse: (response: any) => {
		return response;
	},
	context: ({ event, context, req }) => {

		return {
			headers: event.headers,
			functionName: context.functionName,
			event,
			context
		}
	},
	tracing: true,
	playground: true
});

exports.graphqlHandler = (event: APIGatewayEvent, context: Context, callback: Callback) => {
	const handler = server.createHandler({
		cors: {
			origin: "*",
			credentials: true,
			methods: ["POST", "GET"],
			allowedHeaders: ["Content-Type", "Origin", "Accept"]
		}
	});
	return handler(event, context, callback);
};
