import express from "express";
import { readFile, writeFile } from "node:fs/promises";

const app = express();
app.use(express.json());

app.get("/api/get", async (_req, res) => {
  const data = await readFile("./Pertemuan4.txt", "utf-8");
  res.send(data);
});

app.post("/api/post", async (req, res) => {
    await writeFile("./Pertemuan4.txt", req.body.text, "utf-8");
    res.send(`"${req.body.text}" telah berhasil ditulis`);
});

app.listen(3000, () => console.log("Server Berjalan"));
