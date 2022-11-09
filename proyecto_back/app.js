var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database =require("./config/database");
var auth= require("./auth/main_auth")


var empleadosRouter = require('./routes/empleados.router');
var mascotasRouter = require('./routes/mascotas.router');
var usuariosRouter = require('./routes/usuarios.router');
var fundacionesRouter = require('./routes/fundaciones.router');
var contrasenasRouter= require('./routes/contrasenas.router')
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongoo connection
database.mongoConnect();

app.use('/contrasenas',contrasenasRouter);
app.use(auth)

app.use('/empleados',empleadosRouter);
app.use('/mascotas',mascotasRouter);
app.use('/usuarios',usuariosRouter);
app.use('/fundaciones',fundacionesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
