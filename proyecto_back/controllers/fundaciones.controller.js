const Fundacion= require("../models/fundaciones.model")

let response ={
    msg:"",
    exito:false
}

exports.create= function(req, res){
    let fundacion=new Fundacion({
    id_fundacion:req.body.id_fundacion,
    nombre_fundacion:req.body.nombre_fundacion,
    direccion_fundacion:req.body.direccion_fundacion,
    telefono_fundacion:req.body.telefono_fundacion,
    ciudad_fundacion:req.body.ciudad_fundacion,
        })
    
    fundacion.save(function(err){
        if(err) {
            console.log=false,
            response.exito=false,
            response.msg="Error al guardar fundacion"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="la fundacion se guardo correctamente"
        res.json(response) 
    })
}

exports.find = function(req, res) {
    Fundacion.find(function(err, fundaciones) {
        res.json (fundaciones)
    })

} 
exports.findOne = function(req, res) {
    Fundacion.findOne({_id:req.params.id},function(err, fundaciones) {
        res.json (fundaciones)
    })

} 
exports.update = function(req, res){
    let fundacion={
        id_fundacion:req.body.id_fundacion,
        nombre_fundacion:req.body.nombre_fundacion,
        direccion_fundacion:req.body.direccion_fundacion,
        telefono_fundacion:req.body.telefono_fundacion,
        ciudad_fundacion:req.body.ciudad_fundacion,
     }
     Fundacion.findByIdAndUpdate(req.params.id,{$set:fundacion},function(err){
        if(err) {
            console.error(err),
            response.exito=false,
            response.msg="Error al modificar la fundacion"
            res.json(response)
            return;
            }
            response.exito=true
            response.msg="la fundacion se modifico correctamente"
            res.json(response)
        
     })
}

exports.remove = function(req, res){
    Fundacion.findByIdAndRemove({_id:req.params.id},function(err){
        if(err) {
            console.error(err),
            response.exito=false,
            response.msg="Error al eliminar la fundacion"
            res.json(response)
            return;
            }
            response.exito=true
            response.msg="la fundacion se elimino correctamente"
            res.json(response)
        
     })
} 