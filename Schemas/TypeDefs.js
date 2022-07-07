const { gql } = require("apollo-server-express");
const typeDefs = gql`
type User {
    name: String!
    age: Int!
    location: String
}

type Query {
    getUsers: [User!]!
}
`;
module.exports = { typeDefs };