//requires 
const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");

//iniciar express
const app = express();

//settings
app.set("PORT", process.env.PORT || 4000);

//conexion a la base de datos

//requerimos los datos de conexion
const datos = require("./database/conection.js");
const conexion = mysql.createConnection(datos);
conexion.connect();


//basic middleware
app.use(morgan('dev'));

//routes
app.use(require('./routes/routes.js'));


//server listen
app.listen(app.get("PORT"), ()=>{
    console.log("Server funcionando en el puerto " + app.get("PORT"));
});