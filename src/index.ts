import Fastify from "fastify";
import { DataSource } from "typeorm";

import {Admin} from "./entity/admin"
const server = Fastify({ logger: true });
const AppDataSource = new DataSource({
    type: "postgres",
    username: "testadmin",
    password: "AVNS_1iMpxvQ_x3lfoe3sEMb",
    host: "db-postgresql-fra1-35744-do-user-14976113-0.c.db.ondigitalocean.com",
    port: 25060,
    database: "testdb",
    ssl: {rejectUnauthorized:false},
    synchronize: true,
    logging: true,
    entities: [Admin]
});
const startServer = async () => {
    try {
        AppDataSource.initialize()
            .then(() => {
                console.log("Data Source has been initialized!");
            })
            .catch((err) => {
                console.error("Error during Data Source initialization", err);
            });
        console.log("Connected to the database");
        server.listen({ port: 3000 });
        server.log.info("Server started");
    } catch (err) {
        server.log.error(err);
    }
};

startServer();