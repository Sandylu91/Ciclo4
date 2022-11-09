const Usuario= require("../models/usuarios.model")

let response ={
    msg:"",
    exito:false
}

exports.create= function(req, res){
    let usuario=new Usuario({
        id_usuario:req.body.id_usuario,
        nombre_usuario:req.body.nombre_usuario,
        apellido_usuario:req.body.apellido_usuario,
        ciudad_usuario:req.body.ciudad_usuario,
        mail_usuario:req.body.mail_usuario,
        telefono_usuario:req.body.telefono_usuario,
        contrasena_usuario:req.body.contrasena_usuario
       })
    
    usuario.save(function(err){
        if(err) {
            console.log=false,
            response.exito=false,
            response.msg="Error al guardar el usuario"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="El usuario se guardo correctamente"
        res.json(response) 
    })
}
exports.find = function(req, res) {
    Usuario.find(function(err, usuarios) {
        res.json (usuarios)
    })

} 
exports.findOne = function(req, res) {
    Usuario.findOne({_id:req.params.id},function(err, usuarios) {
        res.json (usuarios)
    })

} 
exports.update = function(req, res){
    let usuario={
        id_usuario:req.body.id_usuario,
        nombre_usuario:req.body.nombre_usuario,
        apellido_usuario:req.body.apellido_usuario,
        ciudad_usuario:req.body.ciudad_usuario,
        mail_usuario:req.body.mail_usuario,
        telefono_usuario:req.body.telefono_usuario,
        contrasena_usuario:req.body.contrasena_usuario
     }
     Usuario.findByIdAndUpdate(req.params.id,{$set:usuario},function(err){
        if(err) {
            console.error(err),
            response.exito=false,
            response.msg="Error al modificar el usuario"
            res.json(response)
            return;
            }
            response.exito=true
            response.msg="El usuario se modifico correctamente"
            res.json(response)
        
     })
}

exports.remove = function(req, res){
    Usuario.findByIdAndRemove({_id:req.params.id},function(err){
        if(err) {
            console.error(err),
            response.exito=false,
            response.msg="Error al eliminar el usuario"
            res.json(response)
            return;
            }
            response.exito=true
            response.msg="El usuario se elimino correctamente"
            res.json(response)
        
     })
}
