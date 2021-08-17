

const schema = `

type Rocket {
     id: ID!
     name: String
     type: String
}

type Mission {
     id: ID!
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
     launches: [Launch]
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
