import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";
import { CREATE_USER} from "./Mutations/User";

// Consulta principal
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  // Funciones que se pueden consultar
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
  },
});

// Nos servira para crear y editar usuarios
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  // Finciones que se pueden consultar
  fields: {
    createUser: CREATE_USER
  },
});

// Esquema de peticiones
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
