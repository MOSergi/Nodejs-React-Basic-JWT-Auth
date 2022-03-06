const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");

//importamos el objeto con la configuración de la base de datos
const dbDt = require("../database/conection.js");

const rutas = express.Router();


//configurando conexion a la base de datos
const conexion = mysql.createConnection(dbDt);
conexion.connect();


rutas.post("/Registrar", (req, res)=>{

    let userData = req.body;

    conexion.query("SELECT nombre FROM usuarios WHERE email = ?", [userData.email], (err, resultado)=>{
        if (err){
            res.json("No pudimos procesar su solicitud");
        }

        if (resultado == ""){
            bcrypt.hash(userData.password, 10, (err, passwordHash)=>{
                
                if (err){
                    console.log(err);
                }
                
                conexion.query("INSERT INTO usuarios (nombre, email, password) VALUES (?,?,?)", [userData.nombre, userData.email, passwordHash], (err, resultado)=>{
                    if (err){
                        res.json("Register Error");
                        console.log(err);
                    } else {
                        res.json("Successfully Register");
                    }
                })
            });
        } else {
            res.json("Invalid Email");
        }
    })

    //res.json(userData.email);
    //res.json("works");

});


module.exports = rutas;