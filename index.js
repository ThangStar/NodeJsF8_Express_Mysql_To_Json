
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mysql = require('mysql')
const { hostname } = require('os')
const { validateHeaderName } = require('http')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database : "db_nodejs"
});


const app = express()
const port = 3000
app.get('/', (req, res) => {
  con.connect(function(err) {
    // if (err) {
    //   console.log("ERROR!")
    //   throw err;
    // }
    // console.log("Connected Success!");
  
    // var createTable = `CREATE TABLE USER( 
    //   id varchar(5) primary key,
    //   username varchar(20),
    //   pass varchar(20)
    //   )`
    // con.query(createTable, (err) => {
    //   if(err != null){
    //     console.log("Lỗi tạo bảng: "+err);
    //   }else{
    //     console.log('tạo bảng thành công');
    //   }
    // })
  
    // const insert = `INSERT INTO USER(id, username, pass) 
    // VALUES ('124', 'thắng', 'thang716')`
    // con.query(insert, (error) => {
    //   console.log(`err ${err}`);
    // })
    console.log('connect suuccess!');
    const q = `SELECT * FROM USER`
    con.query(q, function (err, result, fields) {
      res.send(fields)
      console.log(result);
    })
  });
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})