const express = require("express");
const router =express.Router();
const contrasenasController = require("../controllers/contrasenas.controller");

router.post("/login",contrasenasController.login)
module.exports=router