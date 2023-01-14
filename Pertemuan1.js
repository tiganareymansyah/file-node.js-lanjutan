// // Baca file
// import { readFile } from "node:fs/promises";

// try {
//   const contents = await readFile("./Pertemuan1.txt", "utf-8");
//   console.log(contents);
// } catch (err) {
//   console.error(err.message);
// }

// // Tulis file
// import { writeFile } from "node:fs/promises";

// try {
//     await writeFile("./Pertemuan1.txt", "Sudah masuk ah", "utf-8");
// } catch (err) {
//   console.error(err.message);
// }

// // Tambah file
import { appendFile } from "node:fs/promises";

for (let a = 0; a < 5; a++) {
    await appendFile("./Pertemuan1.txt", `Data ke - ${a+1}\n`, "utf-8");
}