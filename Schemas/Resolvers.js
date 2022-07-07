const users = require("./../Seeders/users");
const resolvers = {
    Query: {
        getUsers() {
            return users;
        }
    }
};
module.exports = { resolvers };