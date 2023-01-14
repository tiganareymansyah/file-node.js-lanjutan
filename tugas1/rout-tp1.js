import { writeFile, readFile } from "node:fs/promises";

export async function getData(_req, res) {
  try {
    const tampilData = await readFile("./tugas1/tugas-pertemuan1.txt", "utf-8");
    res.send(tampilData);
  } catch (err) {
    console.error(err.message);
  }
}

export async function postData(req, _res) {
  try {
    await writeFile("./tugas1/tugas-pertemuan1.txt", `${req.body.tulis}`, "utf-8");
  } catch (err) {
    console.error(err.message);
  }
}
