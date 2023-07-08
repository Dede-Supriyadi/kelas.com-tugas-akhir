const mysql = require("mysql");

const conn = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "barang",
  charset: "utf8mb4",
  timzone: "+00:00",
});

conn.getConnection((err) => {
  if (err) throw err;
  console.log("DB Connected");
});

module.exports = conn;
