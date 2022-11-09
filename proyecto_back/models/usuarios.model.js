const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema= new Schema({
    id_usuario:{type: String, required: true,max:60},
nombre_usuario:{type: String, required: true,max:60},
apellido_usuario:{type: String, required: true,max:40},
ciudad_usuario:{type: String, required: true,max:40},
mail_usuario:{type: String, required: true,max:40},
telefono_usuario:{type: String, required: true,max:40},
contrasena_usuario:{type: String, required: true,max:40},
});
module.exports=mongoose.model("usuarios", UsuariosSchema)