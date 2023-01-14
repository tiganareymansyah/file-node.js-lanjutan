// import { writeFile, readFile } from "node:fs/promises";

// // Menulis
// try {
//     await writeFile ("./Pertemuan2.txt", "Tigana Reymansyah", "utf-8");
//     console.log ("Berhasil menulis file");
// } catch (err) {
//     console.error(`Gagal menulis file ${err.message}`);
// }

// // Membaca
// try {
//     const data = await readFile ("./Pertemuan2.txt", "utf-8");
//     console.log (`Berhasil membaca isi file ${data}`);
// } catch (err) {
//     console.error (`Gagal membaca isi file ${err.message}`);
// }

// // Kombinasi dengan setInterval.
// let a = 0, stop;
// async function myTest () {
//     a++;
//     console.log (a);
//     if (a === 3) {
//         try {
//             await writeFile ("./Pertemuan2.txt", "Tigana Reymansyah", "utf-8");
//             console.log ("Berhasil menulis file");
//         } catch (err) {
//             console.error (`Gagal menulis file ${err.message}`);
//         }
//     }
//     else if (a === 5) {
//         try {
//             const data = await readFile ("./Pertemuan2.txt", "utf-8");
//             console.log (`Berhasil membaca isi file ${data}`);
//             clearInterval (stop);
//         } catch (err) {
//             console.error (`Gagal membaca isi file ${err.message}`);
//         }
//     }
// }

// stop = setInterval (myTest, 1000);



// // HTTP
// import http from "http";

// const server = http.createServer((_req, res) => {
//     res.end ("Halo, selamat datang Mr. Tigana Reymansyah");
// });

// server.listen(3000);

// console.log ("Server sedang berjalan di http://localhost:3000");



import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/a" && req.method === "GET") {
    res.end("Anda berhasil mengakses /a, method get");
  } else if (req.url === "/a" && req.method === "POST") {
    res.end("Anda berhasil mengakses /a, method post");
  } else if (req.url === "/c") {
    res.end("Anda berhasil mengakses /c");
  } else if (req.url === "/d") {
    res.end("Anda berhasil mengakses /d");
  } else {
    res.end("Not found.");
  }
});

server.listen(3000);

console.log("server berjalan di http://localhost:3000");



// Git
// - git adalah perangkat lunak yang berfungsi untuk mengendalikan versi / memanagement proyek terdistribusi gratis dan open source.
// - git config user.email "tiganareymansyah2502@gmail.com" --global fungsinya untuk mndaftarkan akun terlebih dahulu
// - git config --global user.email fungsinya untuk mencek apakah akun kita telah terdaftar
// - git init
// - git add namafileyanginginditambahkan.js / bisa juga pakai titik (yang berarti ngesave file itu semua). yang paling sering di pakai titik
// - git commit -m "pesan perubahan (bebas)" fungsinya untuk mensave data.
// - git status fungsi nya untuk mencek file mana yang barusan di ubah
// - git log berfungsi untuk mencek list commit/savean.
// - git revert namasampingnya berfungsi untuk kembali ke posisi yang kita inginkan.