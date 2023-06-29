# Diplomatura Full Stack Developver
 - Se utilizo para este proyecto React, JavaScript, Html, Css, Bootstrap para el desarrollo FrontEnd
 - Se utilizo para este proyecto Node.js, Express.js, MongoDB
   
## Proceso para instalacion de proyecto
### Paso 1:
Realizar un 
> git clone https://github.com/GonzaloGarmon/proyecto.git

En su gitBash o consola de Windows/Linux/MAC
Luego pararse en "./proyecto" y realizar 
> git clone https://github.com/GonzaloGarmon/gonzalogarmon.github.io

Para descargar el submodulo 

### Paso 2:
Parandonos en la carpeta del repositorio tendra que instalar las dependendendecias de React en la consola de:
 ```
 npm install react
 npm install react-router-dom
 npm install react-dom/client
 npm install react-hook-form
 npm install react-bootstrap

```
### Paso 3:
Luego instalar las dependendencias de Node, Express y MongoDB:
 ```
 npm install express
 npm install body-parser
 npm install cors
 npm install dotenv
 npm install mongoose
 npm install nodemon

```
## Proceso para correr proyecto

Antes de realizar lo siguiente tiene que crearse un archivo **.env** yy en el mismo declarar la variable *PORT=6983* 
en la raiz del proyecto para que pueda sincronizar la base de datos con el front end
Luego remplazar en el archivo **conexion.js** en la parte *mongoose.connect(mongodb://127.0.0.1:sulocalportdelaMongoDb/backend)*



### Luego queda proceder con su utilizacion
### Paso 1:
Pararse en GonzaloGarmon/proyecto y usar:
> cd server

Luego utilizar el comando nodemon 

### Paso 2:
***Abrir una nueva consola y:***
Pararse en GonzaloGarmon/proyecto y usar:

> cd gonzalogarmon.github.io

Luego utilizar el comando npm start 

## Utilizacion del mismo

Este proyecto se creo para la utilizacion y testeo del formulario que se encuentra en la seccion de "contacto" de la pagina web 
Va a poder realizar las operaciones de 
```
 Insertar usuario
 Ver la lista de usuarios
 Modificarlos
 Borrarlos
```










