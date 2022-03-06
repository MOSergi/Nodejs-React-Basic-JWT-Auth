//requires 
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
//iniciar express
const app = express();

//settings
app.set("PORT", process.env.PORT || 4000);

//BASIC MIDDLEWARE
app.use(morgan('dev'));
//cors y configuracion
let corsOptions = {
   "origin" : "http://localhost:3000",
   "methods" : "GET,POST",
   "credentials" : true 
}

app.use(cors(corsOptions));

app.use(cookieParser());

//app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/routes.js'));


//server listen
app.listen(app.get("PORT"), ()=>{
    console.log("Server funcionando en el puerto " + app.get("PORT"));
});