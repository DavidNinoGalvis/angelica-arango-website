// lib/apollo-client.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://angelicaarango.com/graphql", // endpoint de GraphQL
  cache: new InMemoryCache(),
});

export default client;
