import React from "react";
import '../body/body.css';
import  gonza from '../body/gonza.jpg';

const ConfigBody = () => {
    
    return(
    <section className="grid">


    <div className="caja_foto" >
        <img src={gonza} alt="gonza" />
    </div>
    <div className="caja_nombre">
      <h1>Gonzalo Garmon</h1>
      <h2>Estudiante en ingenieria en sistemas</h2>
    <button type="button" className="boton">Codea conmigo</button>
  
    </div>
    <div className="projecto">
    <h3>Projectos</h3>
    </div>
    
    
  </section>
       

    )
}

export default ConfigBody
