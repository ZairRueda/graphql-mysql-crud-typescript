import app from "./app";
import { AppDataSource } from "./db";
import { PORT, DB_HOST } from "./config";

// Inicializacion de la API
const main = async () => {
  try {
    await AppDataSource.initialize();
    console.log('Database initialized')
    app.listen();
    console.log(require('https'));
    
    // console.log(`Server on http://localhost:${PORT}/graphql`);
  } catch (error) {
    console.error(error);
  }
};

main();
