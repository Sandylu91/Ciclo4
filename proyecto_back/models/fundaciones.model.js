const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FundacionesSchema= new Schema({
    id_fundacion:{type: String, required: true,max:60},
nombre_fundacion:{type: String, required: true,max:60},
direccion_fundacion:{type: String, required: true,max:40},
telefono_fundacion:{type: String, required: true,max:40},
ciudad_fundacion:{type: String, required: true,max:40},
});
module.exports=mongoose.model("fundaciones", FundacionesSchema)