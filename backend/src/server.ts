import app from "./app";
import { AppDataSource } from "./database";
import 'reflect-metadata';

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connected");

    const PORT: number = Number(process.env.PORT || 5000);
    app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error: any) => console.error('Error connecting to the database:', error));