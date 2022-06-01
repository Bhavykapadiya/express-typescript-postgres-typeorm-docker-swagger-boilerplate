import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import config from './config/index';
import dbConfig from "./config/database";

import Router from "./routes";
import './utils/response/customSuccess';
import { createConnection } from "typeorm";
const PORT = config.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
try {
  app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: "/swagger.json",
      },
    })
  );
} catch (error) {
  console.log("Unable to read swagger json", error);
}


app.use(Router);

createConnection(dbConfig)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log("Unable to connect to db", err);
    process.exit(1);
  });
