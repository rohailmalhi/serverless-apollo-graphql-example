import { ApolloServer, gql } from "apollo-server-lambda";
import { ITypeDefinitions } from "graphql-tools/dist/Interfaces"
import { Context, Callback, APIGatewayEvent } from "aws-lambda"
import { schema } from "./schema";
import { resolvers } from "./resolvers";
import LaunchAPI  from 'src/datasources/launches'

const typeDef: ITypeDefinitions = schema
const server = new ApolloServer({
	typeDefs: typeDef,
	resolvers: resolvers,
	dataSources: () => ({
		launchApi: new LaunchAPI()
	}),
	formatError: error => {
		return error;
	},
	formatResponse: (response: any) => {
		return response;
	},
	context: ({ event, context }) => ({
		headers: event.headers,
		functionName: context.functionName,
		event,
		context
	}),
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
