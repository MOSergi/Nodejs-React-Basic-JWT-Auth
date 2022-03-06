//requires 
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//iniciar express
const app = express();

//settings
app.set("PORT", process.env.PORT || 4000);

//basic middleware
app.use(morgan('dev'));
//cors y configuracion
let corsOptions = {
   "origin" : "http://localhost:3000",
   "methods" : "GET,POST",
   "credentials" : "include" 
}

app.use(cors(corsOptions));

//app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/routes.js'));


//server listen
app.listen(app.get("PORT"), ()=>{
    console.log("Server funcionando en el puerto " + app.get("PORT"));
});