const Contrasena= require("../models/contrasenas.model")
const crypto= require("crypto");
const jwt= require("jsonwebtoken");

exports.login= function(req, res,next){

    let hashedpass=crypto.createHash("sha512").update(req.body.pass).digest("hex");
    Contrasena.findOne({usuario:req.body.usuario,pass:hashedpass},function(err, contrasena) {
            let response={
                token:null
            }

            if (contrasena!==null) {
                response.token = jwt.sign({
                    id:contrasena._id,
                    usuario:contrasena.usuario
                },"__recret__")
    }
    res.json(response);
    
    }) 
}


    
