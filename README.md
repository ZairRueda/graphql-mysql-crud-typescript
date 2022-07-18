### GraphQL MySQL Typescript CRUD

### Installation

```
npm run build
npm start
```

for development:

```
npm run dev
```

#### Environment variables

If we want to copile TypeScript 
```
npx tsc
```

To make an user
First go to your port

Example:
localhost:3000/graphql
and set the variables

```
mutation {
  createUser (
    nombre: "",
    segundoNombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaDeNacimiento: "",
    correo: "",
    telefono
  )
}
```