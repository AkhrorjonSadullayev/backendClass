import express from "express";
import { PORT } from "./utils/secrets.js";
import { Routes } from './routes/index.js'

const server = express();

// Body-parsing middleware should be before the routes
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Apply routes
Routes.forEach((value) => {
    server.use(value.path, value.router);
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}!`);
});
