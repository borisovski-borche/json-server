const express = require("express");
const helmet = require("helmet");
const fs = require("fs");
const path = require("path");


const gamesPath = path.join(process.cwd(), "/data", "/games.json");
const games = fs.readFileSync(gamesPath, { encoding: "utf-8" });

const app = express();
const PORT = process.env.PORT || "3000";
const HOST = process.env.HOST || "0.0.0.0";

app.use(helmet());

app.use("/api/games",(req,res) => {
    res.set("Content-Type","application/json")

    res.status(200).send(games)
})

app.listen(PORT,HOST,()=> {
    console.log(`Server is running on port :${PORT}`)
})