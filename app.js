const express = require("express");
const app = express();
const conn = require("./config/db");

app.use(express.json());

// Menampilkan seluruh data barang
app.get("/get-namabarang", function (req, res) {
  const queryStr =
    "SELECT id, nama_barang, deskripsi_barang, qty FROM  stock_barang WHERE deleted_at IS NULL";
  conn.query(queryStr, (err, results) => {
    if (err) {
      console.log(err);
      res.eror(err.sqlMessage, res);
    } else {
      res.status(200).json({
        success: true,
        " message": "Data toko anda",
        data: results,
      });
    }
  });
});

// Menampilkan data barang berdasarkan id detail barang
app.get("/get-namabarang-by-id", function (req, res) {
  const param = req.query;
  const id = param.id;

  const queryStr =
    "SELECT * FROM stock_barang WHERE deleted_at IS NULL AND id= ?";
  const values = [id];

  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Request tampilan data barang berhasil",
        data: results,
      });
    }
  });
});

// Post data barang
app.post("/post-namabarang", function (req, res) {
  const param = req.body;
  const nama_barang = param.nama_barang;
  const deskripsi_barang = param.deskripsi_barang;
  const qty = param.qty;
  const now = new Date();

  const queryStr =
    "INSERT INTO stock_barang (nama_barang, deskripsi_barang, qty, created_at) VALUE (?, ?, ? , ?)";
  const values = [nama_barang, deskripsi_barang, qty, now];

  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Menambahkan data barang berhasil",
        data: results,
      });
    }
  });
});

//Update data barang dengan method post
app.post("/update-namabarang", function (req, res) {
  const param = req.body;
  const id = param.id;
  const nama_barang = param.nama_barang;
  const deskripsi_barang = param.deskripsi_barang;
  const qty = param.qty;

  const queryStr =
    "UPDATE stock_barang SET nama_barang=?, deskripsi_barang=?, qty=? WHERE id=? AND deleted_at IS NULL";
  const values = [nama_barang, deskripsi_barang, qty, id];

  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data barang telah update",
        data: results,
      });
    }
  });
});

//Update data barang dengan method put
app.put("/update-namabarang/:id", function (req, res) {
  const id = req.params.id;
  const { nama_barang, deskripsi_barang, qty } = req.body;

  const queryStr =
    "UPDATE stock_barang SET nama_barang=?, deskripsi_barang=?, qty=? WHERE id=? AND deleted_at IS NULL";
  const values = [nama_barang, deskripsi_barang, qty, id];

  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data barang telah diperbarui",
        data: results,
      });
    }
  });
});

//Deleted data barang dengan method post
app.post("/delete-namabarang", function (req, res) {
  const param = req.body;
  const id = param.id;
  const now = new Date();

  const queryStr = "UPDATE stock_barang SET deleted_at = ? WHERE id = ?";
  const values = [now, id];
  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data barang telah terhapus",
        data: results,
      });
    }
  });
});

//Deleted data barang dengan method delete berdasarkan id
app.delete("/delete-namabarang/:id", function (req, res) {
  const id = req.params.id;
  const now = new Date();

  const queryStr = "UPDATE stock_barang SET deleted_at = ? WHERE id = ?";
  const values = [now, id];
  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data barang telah terhapus",
        data: results,
      });
    }
  });
});

// Barang Keluar
app.post("/databarang-keluar", function (req, res) {
  const param = req.body;
  const nama_barang = param.nama_barang;
  const deskripsi_barang = param.deskripsi_barang;
  const qty = param.qty;
  const now = new Date();

  const queryStr =
    "INSERT INTO stock_barang_keluar (nama_barang, deskripsi_barang, qty, created_at) VALUES (?, ?, ?, ?)";
  const values = [nama_barang, deskripsi_barang, qty, now];

  conn.query(queryStr, values, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: err.sqlMessage,
        data: results,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Data barang keluar berhasil disimpan",
        data: results,
      });
    }
  });
});

app.listen(5000, () => console.log("Server is running on port 5000"));
