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

export const GET_ALL_USERS = {
  type: new GraphQLList(UserType),
  resolve() {
    return users_test_andres_zair_jimenez_rueda.find();
  },
};

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
