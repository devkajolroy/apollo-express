import { ApolloServer } from "@apollo/server";
import { PostResolver } from "./post/resolvers/index";
import { mutationsTypesOfPost } from "./post/typedef/mutationsTypes";
import { queriesTypesOfPost } from "./post/typedef/queriesTypes";
import { UserResolver } from "./user/resolvers";
import { datatypesOfUser } from "./user/typedef/datatypes";
import { mutationsTypesOfUser } from "./user/typedef/mutationsTypes";
import { queriesTypesOfUser } from "./user/typedef/queriesTypes";

export async function configGql() {
  const gqlServer = new ApolloServer({
    typeDefs: `
        ${datatypesOfUser}
        type Query{
            ${queriesTypesOfUser}
            ${queriesTypesOfPost}
        }
        type Mutation{
            ${mutationsTypesOfUser}
            ${mutationsTypesOfPost}
        }
    `,
    resolvers: {
      Query: {
        ...UserResolver.query,
        ...PostResolver.query,
      },
      Mutation: {
        ...UserResolver.mutation,
        ...PostResolver.mutation,
      },
    },
  });
  await gqlServer.start();
  return gqlServer;
}
