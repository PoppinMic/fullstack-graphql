const gql = require('graphql-tag');
const { ApolloServer } = require('apollo-server');
const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User!
    friends: [User]!
  }
`;
const resolvers = {
  Query: {
    me() {
      return {
        email: 'cjma1990au@gmail.com',
        avatar: 'https://placekitten.com/540/540',
        friends: []
      };
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen(4000).then(() => {
  console.log('Server running on http://localhost:4000');
});
