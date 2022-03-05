import React from 'react';
import './NavBar.css';


function NavBar () {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fill">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">Hero Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#">Ofertas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Mas Vendidos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Notificaciones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href='/#'>Cuenta</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;