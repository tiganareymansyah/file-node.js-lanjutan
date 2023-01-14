import express from "express";
import { getData, postData } from "./rout-tp1.js";

const app = express();
app.use(express.static("tugas1"));
app.use(express.json());

app.get("/api/restapitp1/get", getData);
app.post("/api/restapitp1/post", postData);

app.listen(3000, () => console.log("sedang berjalan ....."));