
import { resolveGetAllLaunches } from "src/resolvers/query";
import { IResolvers } from "graphql-tools/dist/Interfaces"

export const resolvers: IResolvers = {
    Query: {
        // hello: (root: any, args: any, context: any) => hello(args, context)
        launches: resolveGetAllLaunches,
        launch: (_, {id}, {dataSources}) => dataSources.launchApi.getLaunchById({ launchId: id}),
        me: (root: any, args: any, context: any) => { return { id: 50, name: 'Rohail', email: 'rohailmalhi@gmail.com'} }
    }
}
