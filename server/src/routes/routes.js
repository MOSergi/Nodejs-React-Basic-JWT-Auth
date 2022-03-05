const { application } = require("express");
const express = require("express");

const rutas = express.Router();

rutas.get("/Registrar", (req, res)=>{
    res.send("hola desde el backend");
});


module.exports = rutas;