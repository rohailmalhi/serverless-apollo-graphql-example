
import { hello } from "src/resolvers/query";
import { IResolvers } from "graphql-tools/dist/Interfaces"

export const resolvers: IResolvers = {
    Query: {
        hello: (root: any, args: any, context: any) => hello(args, context)
    }
}
