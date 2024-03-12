import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "../src/entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "koi",
    password: "productpass",
    database: "productdb",
    entities: [Product],
    synchronize: true,
    logging: false,
});