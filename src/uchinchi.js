import express from "express";
import { PORT } from "./utils/secrets.js";
import { Routes } from './routes/index.js'
import { MONGODB_CONNECT } from "./utils/database.config.js";

const server = express();

void MONGODB_CONNECT()

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

Routes.forEach((value) => {
    server.use(value.path, value.router);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
