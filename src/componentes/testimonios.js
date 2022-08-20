import React from "react";
import "../hojas_estilos/testimonios.css";

function Testimonios(props){
  return(
    <>
    <div className="contenedor-testimonios">
      <img className="img-testimonios" src={require(`../img/${props.img}.jpg`)}
      alt="Foto modelo"/>
    <div className="contenedor-textotestimonio">
    <p className="nombre-testimonio">
      <strong>{props.nombre}</strong> de {props.pais}
      </p>
    <p className="cargo-testimonio">&#9829;<strong>{props.cargo}</strong></p>
    <p className="texto-testimonio">&#128064;{props.testimonio}</p>
    </div>
    </div>
    </>
  );  
}
export default Testimonios;