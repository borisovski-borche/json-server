const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const gamesPath = path.join(process.cwd(), "/data", "/games.json");
const games = fs.readFileSync(gamesPath, { encoding: "utf-8" });

const carsPatth = path.join(process.cwd(), "/data", "/games.json");
const cars = fs.readFileSync(carsPath, { encoding: "uth-8" });

const app = express();
const PORT = process.env.PORT || "3000";
const HOST = process.env.HOST || "0.0.0.0";

app.use(helmet());
app.use(cors());

app.use("/api/games", (req, res) => {
  res.set("Content-Type", "application/json");

  res.status(200).send(games);
});

app.use("/api/cars", (req, res) => {
  res.set("Content-Type", "applicaiton/json");

  res.status(200).send(cars);
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port :${PORT}`);
});
