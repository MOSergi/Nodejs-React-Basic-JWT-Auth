//requerimientos
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const token = require("jsonwebtoken");

//express Router
const rutas = express.Router();

//secret
let secreto = require("../auth/secret.js");

//importamos el objeto con la configuración de la base de datos
const dbDt = require("../database/conection.js");
const { application } = require("express");
//configurando conexion a la base de datos
const conexion = mysql.createConnection(dbDt);
conexion.connect();

//rutas
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
});

rutas.post("/Login", (req, res)=>{
    //res.json(req.body);
    let datos = req.body;

    conexion.query("SELECT email, password FROM usuarios WHERE email = ?", [datos.email], (err, info)=>{
        if (err){
            console.log(err);
        }

        if (info == ""){
            res.json("No match email");
        } else {
            let bdPassword = info[0].password;
            bcrypt.compare(datos.password, bdPassword, (err, respuesta)=>{
                if (err){
                    console.log(err);
                } 

                if (respuesta == false){
                    res.json("Invalid Password");
                } else {
                    let userEmail = info[0].email;
                    token.sign(userEmail, secreto, (error, token)=>{
                        if (error){
                            console.log(error);
                        }
                        res.cookie("token", token, {path : "/", httpOnly: true});
                        res.json("Valid Auth");
                    });
                }
            });

        }

    });


});


module.exports = rutas;