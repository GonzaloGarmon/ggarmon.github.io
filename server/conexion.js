const mongoose = require('mongoose');
require('dotenv').config();


const url = process.env.MONGO_URL

mongoose.connect(url);


const objetobd = mongoose.connection 

objetobd.on('connected', ()=>{console.log('conexion correcta a mongoDB')})
objetobd.on('error', ()=>{console.log('Error en la conexion a mongoDB')})

module.exports = mongoose