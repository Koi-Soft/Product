import express, { Application } from "express";
import { AppDataSource } from './db/db'

import Server from "./src/index";

const app: Application = express();
const port: number = 3001;
const server: Server = new Server(app);

app.listen(port, () => {
    console.info(`Server running in port ${port}`);
    
    // to initialize the initial connection with the database, register all entities
    // and "synchronize" database schema, call "initialize()" method of a newly created database
    // once in your application bootstrap
    AppDataSource.initialize()
        .then(() => {
            // here you can start to work with your database
            console.log('Database connected');
        })
        .catch((error) => console.log(error))
});
