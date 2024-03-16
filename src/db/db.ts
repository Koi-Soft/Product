import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "../entity/Product"
import { env } from "../lib/dotenv";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: env.get("DB_HOST"),
    port: env.get("DB_PORT"),
    username: env.get("DB_USER"),
    password: env.get("DB_PASS"),
    database: env.get("DB_NAME"),
    entities: [Product],
    synchronize: true,
    logging: false,
});