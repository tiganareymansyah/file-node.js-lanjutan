import express from "express";
import { unlink } from "node:/promises";

const app = express();
app.use(express.json());

app.delete("/api/restapi/delete", async (_req, res) => {
  try {
    await unlink("./Kuiz2.txt");
    res.send("File berhasil dihapus")
  } catch (err) {
    console.error(`File berhasil di hapus ${err.message}`);
  }
});

app.listen(3000, () => console.log("Sedang jalan ....."));