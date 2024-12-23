import React from 'react'
import '../App.css';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer id="footer">
                <div class="container">
                <div class="row">
                    <div class="col-6 col-md-4 order-1 order-md-1">
                    <h5>Hello Center</h5>
                    <h5>suivez-nous</h5>
                    <div className="social gap-2">
                            <a href="https://www.facebook.com/profile.php?id=100078847297180" class="Facebook">
                            <FaFacebook />
                            </a>
                            <a href="https://twitter.com/HELLOCENTER3?t=dTFICd7F-U_Mes2u7aU08A&s=09" class="Twitter">
                            <FaTwitter />
                            </a>
                            <a href="https://www.linkedin.com/company/hellcenter/" class="Linkedin">
                            <FaLinkedinIn />
                            </a>
                            <a href="https://www.instagram.com/hellocenter29?igsh=MWZ5d281bXc1M2hoMw==" class="Google Plus">
                            <FaInstagram />
                            </a>
                    </div>
                    </div>
                    <div class="col-6 col-md-4 order-3 order-md-2">
                    <h5>SERVICES</h5>
                        <p>Service Client</p>
                        <p>Télévente</p>
                        <p>Prise de rendez-vous</p>
                        <p>Sondage</p>
                    </div>
                    <div class="col-6 col-md-4 order-2 order-md-3">
                    <h5>Contactez-Nous</h5>
                    <p>contact@hellocenter.org</p>
                    <p>recrutement.rh@hellocenter.org</p>
                    <p>+221.33.848.10.18</p>
                    </div>
                </div>

                    {/* <div class="row content-justify-between">
                        <div class="col-md-8 col-12 text-center text-lg-left text-md-left">
                           <p class="copyright">Design by FreeLanceSenegal | <a href="http://www.freelancesenegal.com" target="_blank">FLS</a>. 
                                
                                
                            </p>
                        </div>
                        <div class="col-md-4 col-12">
                            <ul class="social text-center text-md-right text-lg-right">
                                <li>
                                    <a href="https://www.facebook.com/profile.php?id=100078847297180" class="Facebook">
                                        <i class="ion-social-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/HELLOCENTER3?t=dTFICd7F-U_Mes2u7aU08A&s=09" class="Twitter">
                                        <i class="ion-social-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/hellcenter/" class="Linkedin">
                                        <i class="ion-social-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://hello-center-call-center.business.site/" class="Google Plus">
                                        <i class="ion-social-googleplus"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </footer>
  )
}
