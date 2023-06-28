const express = require ('express')
const app = express()
const archivoBD = require('./conexion')
const rutausuario = require('./rutas/usuario')
const cors = require('cors')
//Importar body parser
const bodyParser = require ('body-parser')
require('dotenv').config();

const puerto = process.env.PORT || 5000


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/backend/usuario', rutausuario)


app.get('/', (req,res) =>{
    res.end('bienvenidos al sv backend')
})


app.listen(puerto, () => {
    console.log(`Tu server esta listo en el puerto ${puerto}`)
})


