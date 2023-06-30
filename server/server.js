const express = require ('express')
const app = express()
const archivoBD = require('./conexion')
const rutausuario = require('./rutas/usuario')
const cors = require('cors')
//Importar body parser
const bodyParser = require ('body-parser')
require('dotenv').config();
const nodemailer = require("nodemailer");

const puerto = process.env.PORT || 5000
const mimail = process.env.EMAIL_P;
const micontrasenia = process.env.CONTRASENIA;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))
app.use('/backend/usuario', rutausuario)


app.post("/backend/usuario/form", (req, res) =>{
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail =`
        <h3> Email enviado desde pagina React </h3>
        <ul>
            <li> Email: ${req.body.email}</li>
            <li> Nombre y apellido: ${req.body.nombre} ${req.body.apellido}</li>
            <li> Nombre y apellido: ${req.body.comentario}</li> 
        </ul>
        <h4>Gracias por llenar el formulario!</h4>
        `;
        const html =`
        <h3> Email enviado desde pagina React </h3>
        <ul>
            <li> Email: ${req.body.email}</li>
            <li> Nombre y apellido: ${req.body.nombre} ${req.body.apellido}</li>
        </ul>
        <h3>Comentario</h3>
        <p>${req.body.comentario}</p>

        <h4>Se lleno el formulario</h4>
        `;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        debug: true,
        secureConnetion: false,
        debug: true,
        auth: {

            user: mimail,
            pass: micontrasenia
        },
        tls: {rejectUnauthorized: true}
    });

    let mailOptions = {
        from: "react-web@gmail.com",
        to: req.body.email,
        subject: "noreply",
        text: req.body.comentario,
        html: htmlEmail

    }

    let mailOpciones = {
        from: mimail,
        to: mimail,
        subject: "React Contact Request",
        text: req.body.comentario,
        html: html

    }
    

    transporter.sendMail(mailOptions, (err,info) =>{
        if (err){
            return console.log(err);
        }
        console.log("comentario enviado");
        console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));

    });

    transporter.sendMail(mailOpciones, (err,info) =>{
        if (err){
            return console.log(err);
        }
        console.log("comentario enviado");
        console.log("Url del mensaje: %s", nodemailer.getTestMessageUrl(info));

    });
})

})
app.get('/', (req,res) =>{
    res.end('bienvenidos al sv backend')
})


app.listen(puerto, () => {
    console.log(`Tu server esta listo en el puerto ${puerto}`)
})




