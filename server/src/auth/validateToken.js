const token = require("jsonwebtoken");
let secret = require("../auth/secret.js");

function validateToken(req, res, next){

    if (req.cookies.token == undefined){
        return res.json("NoToken");
    } else {
        const tokendUsuario = req.cookies.token;
        token.verify(tokendUsuario, secret, (error, authtoken)=>{
            if (error){
                res.cookie("token", "expired", {path: "/", httpOnly: true, maxAge: 1000});
                return res.json("Invalid Token");
            }

            if (Date.now()/1000 < authtoken.exp){
                req.tokenUsuario = authtoken.valor;
                next();
            } 

        });
    }

}

module.exports = validateToken;