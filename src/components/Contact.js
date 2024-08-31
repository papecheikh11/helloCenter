import React, {useState} from 'react'
import '../App.css';
import Info from './Info'
import { TbBrandMyOppo } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        sujet: "",
        message: ""
    })
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://localhost:4000/messages/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        console.log({ response })

        if (response.ok) {
            console.log('Message envoyé avec succès !');
        } else {
            console.log('Erreur lors de l\'envoi du message.');
        }
    } catch (error) {
        console.log('Une erreur est survenue lors de l\'envoi du message.');
    }
    }

  return (
    <div>
    {/* Global Page Section Start */}
        <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>Contact</h2>
                            <ol class="breadcrumb list-inline text-center">
                                <li class="list-inline-item">
                                    <a href="index.html">
                                        <i class="ion-ios-home"></i>
                                        Accueil &nbsp; &nbsp;/
                                    </a>
                                </li>
                                <li class="active list-inline-item">Contact</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Contact Section Start */}
<section id="contact-section">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mb-5 mb-md-0">
                <div class="block">
                    <h2 class="subtitle wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Laissez nous un message</h2>
                    <div class="contact-form">
                        <form onSubmit={handleSubmit} id="contact-form" className='d-flex flex-column gap-4' method="#" action="#" role="form">
                
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".6s">
                                <input value={formData.nom} onChange={handleChange} type="text" placeholder="Nom" class="form-control" name="nom" id="nom" />
                            </div>
                            
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                                <input value={formData.email} onChange={handleChange} type="email" placeholder="Email" class="form-control" name="email" id="email" />
                            </div>
                            
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1s">
                                <input value={formData.sujet} onChange={handleChange} type="text" placeholder="Sujet" class="form-control" name="sujet" id="sujet" />
                            </div>
                            
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                                <textarea value={formData.message} onChange={handleChange} rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>    
                            </div>
                            
                            <div id="success" class="success">
                                Votre message a étè transmis avec succés :
                            </div>
                            
                            <div id="error" class="error">
                                Veuillez envoyer un mail à l'adresse email ci-dessous :
                            </div>
                            
                            <div id="submit" class="wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.4s">
                                <button type="submit" id="contact-submit" class="btn btn-default btn-send hvr-bounce-to-right" value="Send Message">Envoyer</button>
                            </div>                      
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                 <div class="map-area">
                    <h2 class="subtitle  wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Ou nous trouver ?</h2>
                    <p class="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                        Nous sommes juste en face du restaurant et supermarché Mon Prix à Ouakam.
                        
                    </p>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.754279588905!2d-17.495679085158358!3d14.726479589722409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec112b2cfea373d%3A0xa8f260344df763d9!2sFAST%20FOOD%20RESTAURANT%20Supermarch%C3%A9%20MonPrix!5e0!3m2!1sfr!2ssn!4v1648113248356!5m2!1sfr!2ssn" width="100%" height="400" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
        <div class="col-12 col-md-6 text-center">
            <h4>Avantages de Rejoindre HELLO CENTER</h4>
            <div class="row">
                <div class="col-12 col-md-6 mt-1 text-center">
                    <TbBrandMyOppo class="iconeService" />
                    <h6>Opportunités de Carrière</h6>
                </div>
                <div class="col-12 col-md-6 mt-1 text-center">
                    <PiStudent class="iconeService" />
                    <h6>Formation Continue</h6>
                </div>
                <div class="col-12 col-md-6 mt-1 text-center">
                    <TbBrandMyOppo class="iconeService" />
                    <h6>Opportunités de Carrière</h6>
                </div>
                <div class="col-12 col-md-6 mt-1 text-center">
                    <PiStudent class="iconeService" />
                    <h6>Formation Continue</h6>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <form id="contact-form" className='container d-flex flex-column gap-4' method="#" action="#" role="form">
                    
                    <div class="row form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".6s">
                        <div class="col-12 col-md-6">
                            <input type="text" placeholder="Nom" class="form-control" name="name" id="name" />
                        </div>
                        <div class="col-12 col-md-6">
                            <input type="text" placeholder="Prenom" class="form-control" name="lastName" id="lastName" />
                        </div>
                    </div>
                    
                    <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                        <input type="email" placeholder="Email" class="form-control" name="email" id="email" />
                    </div>
                    <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                        <input type="num" placeholder="Numéro téléphone" class="form-control" name="tel" id="tel" />
                    </div>
                    
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Comment avez vous entendu parler de l'entreprise?</option>
                        <option value="1">Bouche à oreille</option>
                        <option value="2">Internet</option>
                        <option value="3">Entretient</option>
                    </select>
                    
                    <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                        <div class="upload-container">
                            Télécharger
                            <input type="file" accept=".pdf" />
                        </div>
                    </div>
                    
                    <div id="success" class="success">
                        Votre message a étè transmis avec succés :
                    </div>
                    
                    <div id="error" class="error">
                        Veuillez envoyer un mail à l'adresse email ci-dessous :
                    </div>
                    
                    <div id="submit" class="wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.4s">
                        <button type="submit" id="contact-submit" class="btn btn-default btn-send hvr-bounce-to-right" value="Send Message">Envoyer</button>
                    </div>                      
                </form>
        </div>
        </div>
        <div class="row address-details">
            
            <div class="col-lg-3 col-sm-6">
                <div class="address wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                    <i class="ion-ios-location-outline"></i>
                    <h5>Sénégal, Dakar <br/>Ouakam en face MonPrix</h5>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="email wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                    <i class="ion-ios-email-outline"></i>
                    <p>contact@hellocenter.org<br/>contact@hellocenter.org</p>
                </div>
            </div>
            <div class="col-lg-3 col-sm-6">
                <div class="phone wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                    <i class="ion-ios-telephone-outline"></i>
                    <p>+221 33 848 10 18<br/>+221 77 870 61 24</p>
                </div>
            </div>
        </div>
    </div>
</section>  

      {/* Call To Action Section Start */}
      <Info/>
    </div>
  )
}
