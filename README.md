# Diplomatura Full Stack Developver
 - Se utilizo para este proyecto React, JavaScript, Html, Css, Bootstrap para el desarrollo FrontEnd
 - Se utilizo para este proyecto Node.js, Express.js, MongoDB para el desarrollo BackEnd
   
## Proceso para instalacion de proyecto
### Paso 1:

Realizar un git clone en su gitBash o consola de Windows/Linux/MAC
> git clone https://github.com/GonzaloGarmon/proyecto.git



Luego pararse en "./proyecto" y eliminar la carpeta de gonzalogarmon.github.io, hacemos nuevamente un git clone para descargar el submodulo 
> git clone https://github.com/GonzaloGarmon/gonzalogarmon.github.io

Antes de terminar este paso abrimos el VScode

### Paso 2:
Parandonos en la carpeta del repositorio tendra que instalar las dependendendecias de React en la consola de:
 ```
 npm install react react-router-dom react-dom react-hook-form react-bootstrap

```
### Paso 3:
Luego instalar las dependendencias de Node, Express y MongoDB:
 ```
 npm install express body-parser body-parser cors dotenv mongoose nodemon

```
## Proceso para correr proyecto

Antes de realizar lo siguiente tiene que crearse un archivo **.env** y en el mismo declarar la variable:

  -*PORT=6983*  
  -*MONGO_URL="URL DE SU BASE DE DATOS"*
  
en la raiz del proyecto para que pueda sincronizar la base de datos con el FrontEnd


### Luego queda proceder con su utilizacion
### Paso 1:
Pararse en "./proyecto" y usar:
> cd server

Luego utilizar el comando ```nodemon ```

### Paso 2:
***Abrir una nueva consola y:***

Pararse en "./proyecto" y usar:

> cd gonzalogarmon.github.io

Luego utilizar el comando ```npm start``` 

## Utilizacion del mismo

Este proyecto se creo para la utilizacion y testeo del formulario que se encuentra en la seccion de "contacto" de la pagina web 
Va a poder realizar las operaciones de 
```
 Insertar usuario
 Ver la lista de usuarios
 Modificarlos
 Borrarlos
```










