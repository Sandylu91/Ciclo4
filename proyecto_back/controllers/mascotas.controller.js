const Mascota= require("../models/mascotas.model")

let response ={
    msg:"",
    exito:false
}

exports.create= function(req, res){
    let mascota=new Mascota({
        id_mascota:req.body.id_mascota,
        nombre_mascota:req.body.nombre_mascota,
        raza_mascota:req.body.raza_mascota,
        edad_mascota:req.body.edad_mascota
       })
    
    mascota.save(function(err){
        if(err) {
            console.log=false,
            response.exito=false,
            response.msg="Error al guardar la mascota"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="La mascota se guardo correctamente"
        res.json(response) 
    })
}
exports.find = function(req, res) {
    Mascota.find(function(err, mascotas) {
        res.json (mascotas)
    })

} 
exports.findOne = function(req, res) {
    Mascota.findOne({_id:req.params.id},function(err, mascotas) {
        res.json (mascotas)
    })

} 
exports.update = function(req, res){
    let mascota={
        id_mascota:req.body.id_mascota,
        nombre_mascota:req.body.nombre_mascota,
        raza_mascota:req.body.raza_mascota,
        edad_mascota:req.body.edad_mascota,
     }
     Mascota.findByIdAndUpdate(req.params.id,{$set:mascota},function(err){
        if(err) {
            console.error(err),
            response.exito=false,
            response.msg="Error al modificar la mascota"
            res.json(response)
            return;
            }
            response.exito=true
            response.msg="La mascota se modifico correctamente"
            res.json(response)
        
     })
}

exports.remove = function(req, res){
    Mascota.findByIdAndRemove({_id:req.params.id},function(err){
        if(err) {
            console.error(err),
            response.exito=false,
            response.msg="Error al eliminar la mascota"
            res.json(response)
            return;
            }
            response.exito=true
            response.msg="La mascota se elimino correctamente"
            res.json(response)
        
     })
}
