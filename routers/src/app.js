import express from "express";
import users from "./routes/users.router.js";

const app = express();


app.use(express.json());

app.use("/api/users", users);

const server = app.listen(3000, () => {
    console.log("Server running on port 3000");
});