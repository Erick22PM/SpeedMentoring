import React from 'react'
import Card from './components/Card/Card'
import Layout from './components/Layout/Layout'

export default function page() {
  return (
    <div>
      <div><Layout></Layout></div>
      <div>
        <h1 className='text-bg-danger'>aefawfa</h1>
        <Card titulo = "Titulo 1" textoboton='Hola' texto='texto 0' imagen='https://datacenter360.net/wp-content/uploads/2020/02/Firewall-Cisco-Firepower-FPR-C9300-AC.jpg'/>
        <Card titulo = "Titulo 2" textoboton='Boton 2' texto='texto 1'/>
        <Card titulo = "Titulo 3" textoboton='Boton 1' texto='texto 2'/>
        <Card titulo = "Titulo 4" textoboton='Boton 2' texto='texto 3'/>
      </div>
    </div>
  )
}
