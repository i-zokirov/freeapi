import { DataSourceOptions, DataSource } from "typeorm";

export const datasourceOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "0220",
  database: "free-api",
  entities: ["dist/src/**/*.entity.js"],
  migrations: ["dist/db/migrations/*.js"],
  synchronize: false,
  logging: true,
};

const datasource = new DataSource(datasourceOptions);
export default datasource;
