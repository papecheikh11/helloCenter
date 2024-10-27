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
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a className="col-6 navbar-brand" href="/">
                        <img src={require('../images/logo.jpg')} alt="logo" with="100px" height="65" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="col-6 collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto d-flex gap-3">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><b>Accueil</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/apropos"><b>Qui sommes nous</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#services"><b>Services</b></a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="contact"><b>Contact</b></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
                    <a className="navbar-brand" href="/">
                        <img src={require('../images/logo.jpg')} alt="logo" with="100px" height="65" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto d-flex gap-3">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><b>Accueil</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/apropos"><b>Qui sommes nous</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#services"><b>Services</b></a>
                            </li>
                           
                            <li className="nav-item">
                                <a className="nav-link" href="contact"><b>Contact</b></a>
                            </li>
                        </ul>
                    </div>
                </nav> */}
        </div>
    </div>
</section>
    </div>
  )
}
