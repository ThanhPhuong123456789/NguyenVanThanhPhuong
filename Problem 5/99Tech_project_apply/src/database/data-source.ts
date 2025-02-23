import "reflect-metadata";
import { DataSource } from "typeorm";
import { ResourceEntity } from "../models/ResourceEntity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "root",
  database: process.env.DB_DATABASE || "demo",
  synchronize: true,
  logging: false,
  entities: [ResourceEntity],
});

