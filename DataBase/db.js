const mysql = require("mysql");
require('dotenv').config();

module.exports = db = mysql.createConnection({
    user: process.env.db_user,
    host: process.env.db_host,
    password: process.env.db_pass,
    database: "gallery",
  });

  db.connect((err)=>{
    if(err) throw err;
    console.log("DB Successfully Connected");
  })
