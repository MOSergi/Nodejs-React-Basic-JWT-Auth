const { application, json } = require("express");
const express = require("express");
const mysql = require("mysql");

const rutas = express.Router();

rutas.post("/Registrar", (req, res)=>{

    let userData = req.body;

    res.json(userData);

});


module.exports = rutas;