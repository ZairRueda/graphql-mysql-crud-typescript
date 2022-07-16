import { GraphQLNonNull, GraphQLString } from "graphql";

// Esquema para adquirir informacion de los usuarios
export const GREETING = {
  type: GraphQLString,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(_: any, args: any) {
    return `Hello ${args.name}`;
  },
};
