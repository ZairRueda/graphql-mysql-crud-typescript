import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  graphqlSync,
} from "graphql";
import { users_test_andres_zair_jimenez_rueda } from "../../Entities/Users";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER = {
  type: UserType,
  args: {
    nombre: { type: new GraphQLNonNull(GraphQLString) },
    segundoNombre: { type:GraphQLString},
    apellidoPaterno: { type: new GraphQLNonNull(GraphQLString) },
    apellidoMaterno: { type: new GraphQLNonNull(GraphQLString) },
    fechaDeNacimiento: { type: new GraphQLNonNull(GraphQLString) },
    correo: { type: new GraphQLNonNull(GraphQLString) },
    telefono: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const {
      nombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaDeNacimiento,
      correo,
      telefono
    } = args;

    const result = await users_test_andres_zair_jimenez_rueda.insert({
      nombre,
      segundoNombre,
      apellidoPaterno,
      apellidoMaterno,
      fechaDeNacimiento,
      correo,
      telefono
    });

    return { ...args, id: result.identifiers[0].id};
  },
};