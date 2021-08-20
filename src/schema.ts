import { gql } from "apollo-server-lambda"

const schema = gql`

type Rocket {
     id: ID!
     name: String
     type: String
}

type Mission {
     name: String!
     missionPatch(size: PatchSize): String 
}

type Launch {
     id: ID!
     site: String
     mission: Mission
     rocket: Rocket
     isBooked: Boolean!
}

type User {
     id: ID!
     email: String
     trips: [Launch]
     token: String 
}

enum PatchSize {
     SMALL
     LARGE
}

type Query {
     """ Get list of launches"""
     launches(
          """ The number of results to show. Must be >=1. Defaults to all entries returned """
          limit: Int
          """ Offset or skip results from the beginning of the query """
          offset: Int
          ): [Launch]
     launch(id: ID!): Launch 
     me: User
}

type Mutation {
     bookTrips(launchIds: [ID]!): TripUpdatedResponse!
     cancelTrip(launchIds: [ID]!): TripUpdatedResponse!
     login(email: String): User
}

type TripUpdatedResponse {
     success: Boolean!
     message: String
     launches: [Launch]
}
`
export { schema }
