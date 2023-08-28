import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { configGql } from "./graphql/configure";

async function init() {
  // configure app
  dotenv.config();
  const app = express();
  app.use(cors({ origin: "*" }));
  app.use(express.json());

  // Graphql config
  const gql = await configGql();
  app.use("/graphql", expressMiddleware(gql));

  // Init response
  app.get("/", (req, res) => {
    res.json({ message: "Hello! " });
  });
  // Run app
  const PORT = Number(process.env.PORT) || 5000;
  app.listen(PORT, () => {
    console.log(`Server ⚡:: Started on http://localhost:${PORT}`);
  });
}
init();
