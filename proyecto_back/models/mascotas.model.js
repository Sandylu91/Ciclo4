const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MascotasSchema= new Schema({
    id_mascota:{type: String, required: true,max:60},
nombre_mascota:{type: String, required: true,max:60},
raza_mascota:{type: String, required: true,max:40},
edad_mascota:{type: String, required: true,max:40},
});
module.exports=mongoose.model("mascotas", MascotasSchema)