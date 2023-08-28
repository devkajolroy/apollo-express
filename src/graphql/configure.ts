import { ApolloServer } from "@apollo/server";
import { resolver } from "./user/resolvers";
import { datatypes } from "./user/typedef/datatypes";
import mutationsTypes from "./user/typedef/mutationsTypes";
import queriesTypes from "./user/typedef/queriesTypes";

export async function configGql() {
  const gqlServer = new ApolloServer({
    typeDefs: `
        ${datatypes}
        type Query{
            ${queriesTypes}
        }
        type Mutation{
            ${mutationsTypes}
        }
    `,
    resolvers: {
      Query: resolver.query,
      Mutation: resolver.mutation,
    },
  });
  await gqlServer.start();
  return gqlServer;
}
