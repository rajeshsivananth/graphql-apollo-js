const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schemas/TypeDefs")
const { resolvers } = require("./Schemas/Resolvers")
const express = require("express");
const app = express();

(async () => {
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(3001, () => {
        console.log('Graphql is up and running..');
    });
})();

