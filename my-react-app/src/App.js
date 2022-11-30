import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Config_head from './body/body'; //esto te genraba conflictos porque ya tenias declarado config_head ya cuando lo importas una vez lo podes usar varias veces
import { BrowserRouter, Switch } from "react-router-dom";
import { Route, Routes} from "react-router-dom";
import ConfigHead from './head/head';
import ConfigBody from './body/body';
import ConfigProyectos from './proyecto/proyecto';



function App() {

  return (
   <BrowserRouter>
     
     <ConfigHead/>
     <ConfigBody/>
     <ConfigProyectos/>

   </BrowserRouter>

  );
}

export default App;