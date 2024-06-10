import React from 'react';
import Link from 'next/link';
import Layout from './components/Layout/Layout';
import styles from './styles/Header.module.css'; // Ajusta la ruta según la ubicación real de tu archivo CSS

export default function Page() {
  return (
    <Layout navbar={true}> {/* Aquí pasas el prop navbar */}
      <div>
        <div className="col-4 d-flex align-items-center justify-content-start">
          <a className="navbar-brand" href="https://www.acatlan.unam.mx/">
            <img 
              src="http://www.w3.org/2000/svg" 
              alt="Logo Fes Acatlan" 
              className={`d-inline-block align-text-start img-fluid ${styles.logoImg}`}
            />
          </a>
        </div>
        
        <div className="container-sm" style={{ backgroundColor: 'rgba(0, 43, 122, 0.8)', borderRadius: '10px' }}>
        <div className="container">
          <div className="row w-100 no-gutters">
            <div className="col-4 d-flex align-items-center justify-content-start">
            mundo
            </div>
            <div className="col-4 d-flex align-items-center justify-content-center">
             hola
            </div>
            <div className="col-4 align-items-center justify-content-end">
              <div className="mb-3">
                ‎ 
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Usuario</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="inputPassword" />
              </div>
              <div className="mb-3">
                ‎ 
              </div>
            </div>
          </div>
        </div>
        </div>  
      </div>
    </Layout>
  );
}




        