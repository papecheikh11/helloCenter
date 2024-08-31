import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  return (
    <div>
      <section className="top-bar animated-header">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                    <a className="navbar-brand" href="/">
                        <img src={require('../images/logo.jpg')} alt="logo" with="100px" height="65" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto d-flex gap-3">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><b>Accueil</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/apropos"><b>Qui sommes nous</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="services"><b>Services</b></a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="contact"><b>Contact</b></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}
