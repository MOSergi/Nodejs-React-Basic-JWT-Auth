const { application, json } = require("express");
const express = require("express");
const mysql = require("mysql");
const dbDt = require("../database/conection.js");

const rutas = express.Router();


//configurando conexion a la base de datos
const conexion = mysql.createConnection(dbDt);
conexion.connect();


rutas.post("/Registrar", (req, res)=>{

    let userData = req.body;

    conexion.query("SELECT * FROM USUARIOS", (err, rows, fileds)=>{
        console.log(rows);
        console.log(fileds);
    })

    res.json("works");

});


module.exports = rutas;