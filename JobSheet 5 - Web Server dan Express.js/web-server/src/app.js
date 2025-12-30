const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Mendefinisikan path untuk konfigurasi Express
const directoryPublic = path.join(__dirname, "../public");
const directoryViews = path.join(__dirname, "../templates/views");
const directoryPartials = path.join(__dirname, "../templates/partials");

// Setup handlebars engine dan lokasi views
app.set("view engine", "hbs");
app.set("views", directoryViews);
hbs.registerPartials(directoryPartials);

// Setup direktori untuk file statis
app.use(express.static(directoryPublic));

//ini halaman/page utama
app.get("", (req, res) => {
  res.render("index", {
    judul: "Aplikasi Cek Cuaca",
    nama: "Ridho Hamdani Putra",
  });
});

//ini halaman bantuan/FAQ (Frequently Asked Questions)
app.get("/bantuan", (req, res) => {
  res.render("bantuan", {
    judul: "Bantuan",
    teksBantuan: "Ini adalah teks bantuan",
    nama: "Ridho Hamdani Putra",
  });
});

//ini halaman tentang
app.get("/tentang", (req, res) => {
  res.render("tentang", {
    judul: "Tentang Saya",
    nama: "Ridho Hamdani Putra",
  });
});

//ini halaman info cuaca
app.get("/infoCuaca", (req, res) => {
  res.send([
    {
      prediksiCuaca: "Cuaca berpotensi hujan",
      lokasi: "Padang",
    },
  ]);
});

app.get("/bantuan/tes", (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Ridho Hamdani Putra",
    pesanKesalahan: "Artikel yang dicari tidak ditemukan",
  });
});

app.get("/tes", (req, res) => {
  res.render("404", {
    judul: "404",
    nama: "Ridho Hamdani Putra",
    pesanKesalahan: "Halaman Tidak Ditemukan",
  });
});

app.listen(4000, () => {
  console.log("Server berjalan pada port 4000.");
});
