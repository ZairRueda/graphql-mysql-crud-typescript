// Lectura de variables de entorno con dotenv config
import { config } from "dotenv";
// Esto es necesesarion para acceder a las variables de entorno
config();

export const PORT = process.env.PORT || 3001;
export const DB_NAME = process.env.DB_NAME;
export const DB_USERNAME = process.env.DB_USERNAME || "root";
export const DB_PASSWORD = process.env.DB_PASSWORD || "";
export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 3306;
