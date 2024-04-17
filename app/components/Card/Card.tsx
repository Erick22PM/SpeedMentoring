import React from 'react'
// Componente que se puede reutilizar (Card)


//Nos ayuda a definir la estructura de un objeto
interface CardProps{
    titulo:string
    texto:string
    imagen:string 
    textoboton:string
}


export default function Card({imagen, texto, textoboton, titulo}:CardProps) {
  return (
    <div className="card" style={{width:"18rem"}}>
        <img src={imagen} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <a href="#" className="btn btn-primary">{textoboton}</a>
        </div>
    </div>
  )
}
