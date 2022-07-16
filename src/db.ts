import { DataSource } from "typeorm";
import { users_test_andres_zair_jimenez_rueda } from "./Entities/Users";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";

// Formato en ORM, inserciones de variables de entorno
export const AppDataSource = new DataSource({
  type: "mysql",
  database: DB_NAME,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: Number(DB_PORT),
  // logging: true,
  synchronize: true,
  entities: [users_test_andres_zair_jimenez_rueda],
  ssl: false,
});
