import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "users_test_andres_zair_jimenez_rueda",
  description: "User Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    segundoNombre: { type: GraphQLString },
    apellidoPaterno: { type: GraphQLString },
    apellidoMaterno: { type: GraphQLString },
    fechaDeNacimiento: { type: GraphQLString },
    correo: { type: GraphQLString },
    telefono: { type: GraphQLString }
  }),
});
