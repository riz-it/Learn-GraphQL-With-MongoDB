import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import schema from "./src/graphql";

mongoose.connect("mongodb://localhost:27017/football");
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error connecting to MongoDB");
}).once("open", () => {
  console.log("Connected to MongoDB");
});

const app = express();

app.get("/", (req, res, next) => {
  res.send("Server is running");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    pretty: true,
  })
);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
