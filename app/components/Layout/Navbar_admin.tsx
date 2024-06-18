import React from 'react'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ backgroundColor: '#EFCA45' }}>
        <div className="container-fluid">
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#3A2E01', fontWeight: 'bold' }} href="#">Estadísticas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#3A2E01', fontWeight: 'bold' }} href="#">Reporte</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ color: '#3A2E01', fontWeight: 'bold' }} href="#">Usuarios</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
