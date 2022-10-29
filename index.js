
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const mysql = require('mysql')
const { hostname } = require('os')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) {
    console.log("ERROR!")
    throw err;
  }
  console.log("Connected!");
  con.query('CREATE DATABASE DB_NODEJS', (err)=>{
    if(err) {
      console.log("ERROR CREATE DATABASE");
      throw err;
    } 
    console.log("CREATE SUCCESS!");
  })
});