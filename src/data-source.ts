import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "phpmyadmin.srv-172-106-0-115.hostoo.io",
    port: 2202,
    username: "crmalldigital",
    password: "alldigitaldev123",
    database: " crmalldigital",
    synchronize: true,
    logging: true,
    entities: [Post, Category],
    subscribers: [],
    migrations: [],

})
