import express from "express";
import { readFile, appendFile } from "node:fs/promises";

const app = express();
app.use(express.json());
app.use(express.static("belajar"));

app.get("/api/restapi/get", async (_req, res) => {
  try {
    const tampilData = await readFile("./belajar/belajar.txt", "utf-8");
    res.send(tampilData);
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/api/restapi/post", async (req, _res) => {
  const array = [];
  let data = `${req.body.coba}\n`;
  array.push(data);
  await appendFile("./belajar/belajar.txt", array);
});

app.listen(5000, () => console.log("Lagi jalan ....."));