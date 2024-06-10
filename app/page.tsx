import React from 'react';
import Link from 'next/link';
import Layout from './components/Layout/Layout';
import styles from './styles/Header.module.css'; // Ajusta la ruta según la ubicación real de tu archivo CSS

export default function Page() {
  return (
    <Layout navbar={true}>
      <div> 
        <div className="container-sm" style={{ backgroundColor: 'rgba(0, 43, 122, 0.8)', borderRadius: '25px' }}>
          <div className="container">
            <div className="row w-100 no-gutters">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
  <div className="container-sm d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(239, 202, 69, 1)', borderRadius: '10px' }}>
    <a className="navbar-brand" href="https://www.acatlan.unam.mx/">
      <img 
        src="https://www.acatlan.unam.mx/identidad-acatlan/img/Logotipos/Escudo/escudo-a.png" 
        alt="Logo Fes Acatlan" 
        className="img-fluid" 
        style={{ maxWidth: '100%', maxHeight: '200px' }} // Hacer la imagen responsiva y definir un tamaño máximo
      />
    </a>
  </div>
</div>

              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <form>
                  <div className="mb-3">
                    ‎ 
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label text-white">Usuario</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="correo@ejemplo.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label text-white">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" />
                  </div>
                    <button
                      type="submit"
                      className="btn w-100"
                      style={{
                        backgroundColor: '#EFCA45',
                        color: '#4F3F05',
                        borderColor: '#EFCA45',
                        borderRadius: '20px'
                      }}>
                      Ingresar
                    </button>
                  <div className="mb-3">
                    ‎ 
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}




        