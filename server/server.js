import express from "express";
const app = express();
// I am importing EXPRESS into my server file on line 1 and 'turning it on' with line 2.

import cors from "cors";
app.use(cors());
// Same principle before but with CORS this time.

app.use(express.json());
// I am telling my EXPRESS server that I want it to use JSON).

app.listen(8080, () => {
  console.log("Express server is running on port 8080");
});
// I am running my EXPRESS server in local host 8080.

app.get("/", (req, res) => {
  res.json({ message: "This is the route of the root!" });
});
// I am getting the data from the end point / at local port 8080 and displaying it.This is the root route.

import pg from "pg";
import dotenv from "dotenv";
dotenv.config();
// I am prepping my EXPRESS server to interact with and write SQL queries.

const dbConnectionString = process.env.DATABASE_URL;
// I am connecting my SUPABASE url from the env file (env file is where I am putting sensitive information like the password to my SUPABASE database)

const db = new pg.Pool({
  connectionString: dbConnectionString,
});
// I am setting up a database POOL properly connect my EXPRESS server and SUPABASE database.

app.get("/juicyjake", (req, res) => {
  // I am making an /endpoint that will READ the data from my SUPABASE database and calling it juicyjake.
  const query = db.query("SELECT * FROM juicyjakesguestbook");
  // I am asking for the data from the table called juicyjakesguestbook from my SUPABASE database. * means all the data from x.
  res.json(query);
  // I want the data response to in a form that the sever will be able to understand. JSON.
});
