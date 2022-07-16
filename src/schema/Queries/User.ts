import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { users_test_andres_zair_jimenez_rueda } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";

// Esquema para adquirir la misma informacion de todos los usuarios
export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return users_test_andres_zair_jimenez_rueda.find();
  },
};

// Esquema para adquirir un usuario o informacion de este
export const GET_USER = {
  type: UserType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    const result = await users_test_andres_zair_jimenez_rueda.findOneBy({ id: args.id });
    return result;
  },
};
