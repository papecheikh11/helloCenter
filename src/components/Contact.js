
import React, {useRef} from 'react'
import '../App.css';
import Info from './Info'
import { TbBrandMyOppo } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import emailjs from 'emailjs-com';
import { GiMoneyStack } from "react-icons/gi";
import { GiWoodFrame } from "react-icons/gi";


export default function Contact() {
    // const [formData, setFormData] = useState({
    //     nom: "",
    //     email: "",
    //     sujet: "",
    //     message: ""
    // })
    
    // const handleChange = (e) => {
    //     setFormData({...formData, [e.target.name]: e.target.value})
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //     const response = await fetch('http://localhost:4000/messages/send', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData)
    //     });
    //     console.log({ response })

    //     if (response.ok) {
    //         console.log('Message envoyé avec succès !');
    //     } else {
    //         console.log('Erreur lors de l\'envoi du message.');
    //     }
    // } catch (error) {
    //     console.log('Une erreur est survenue lors de l\'envoi du message.');
    // }
    // }

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_26fdpl8', 'template_tgwix9p', form.current, 'W3q1bh_ZdO7lF3VBC')
            .then((result) => { console.log(result.text); alert('Message envoyé avec succès !');

            },
                (error) => { console.log(error.text); alert('Erreur lors de l\'envoi du message.');
            });
    }

    
    const sendEmailCandidature = (e) => {
        e.preventDefault();
        
        const formData = new FormData(form.current);
        const fileInput = formData.get('file');
    
        // Si vous utilisez un service de stockage, téléchargez le fichier ici et obtenez le lien
        const fileDownloadLink = "URL_DU_FICHIER_EN_LIGNE";
    
        const emailData = {
            name: formData.get('name'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            tel: formData.get('tel'),
            select: formData.get('select'),
            message: formData.get('message'),
            attachmentLink: fileDownloadLink, // Lien vers le fichier
            attachmentName: fileInput.name // Nom du fichier pour l'affichage
        };
    
        emailjs.send('service_26fdpl8', 'template_5dkmzmf', emailData, 'W3q1bh_ZdO7lF3VBC')
            .then((result) => {
                console.log(result.text);
                alert('Message envoyé avec succès !');
            })
            .catch((error) => {
                console.error('Une erreur est survenue : ', error);
                alert('Erreur lors de l\'envoi du message : ' + error.text);
            });
    };
    
    
    
    
  return (
    <div>
    {/* Global Page Section Start */}
        {/* <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                        </div>
                    </div>
                </div>
            </div>
        </section> */}

        {/* Contact Section Start */}
<section id="contact-section">
    <div class="container">
        <div class="row pt-2 mt-5">
            <div class="col-md-6 mb-5 mb-md-0">
                <div class="block">
                    <h2 class="subtitle wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Laissez nous un message</h2>
                    <div class="contact-form">
                        <form ref={form} onSubmit={sendEmail} id="contact-form" className='d-flex flex-column gap-4' method="#" action="#" role="form">
                
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".6s">
                                <input type="text" placeholder="Nom" class="form-control" name="nom" id="nom" />
                            </div>
                            
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".8s">
                                <input type="email" placeholder="Email" class="form-control" name="email" id="email" />
                            </div>
                            
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1s">
                                <input type="text" placeholder="Sujet" class="form-control" name="sujet" id="sujet" />
                            </div>
                            
                            <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                                <textarea rows="6" placeholder="Message" class="form-control" name="message" id="message"></textarea>    
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
                <GiMoneyStack class="iconeService" />
                    <h6>Rénumération Attractive</h6>
                </div>
                <div class="col-12 col-md-6 mt-1 text-center">
                    <GiWoodFrame class="iconeServic mb-4" />
                    <h6>Cadre Convivial</h6>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <form ref={form} onSubmit={sendEmailCandidature} id="contact-form" className='container d-flex flex-column gap-4' method="#" action="#" role="form">
                    
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
                    
                    <select class="form-select" name="select" id="select" aria-label="Default select example">
                        <option selected>Comment avez vous entendu parler de l'entreprise?</option>
                        <option value="Bouche à oreille">Bouche à oreille</option>
                        <option value="Internet">Internet</option>
                        <option value="Entretient">Entretient</option>
                    </select>
                    
                    <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                                <textarea placeholder="Parler nous de vous" class="form-control" name="message" id="message"></textarea>    
                    </div>
                        
                    <div class="form-group wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.2s">
                        <div class="upload-container">
                            Télécharger
                            <input type="file" name="file" accept=".pdf" />
                        </div>
                    </div>
                    
                    <div id="success" class="success">
                        Votre message a étè transmis avec succés :
                    </div>
                    
                    <div id="error" class="error">
                        Veuillez envoyer un mail à l'adresse email ci-dessous :
                    </div>
                    
                    <div id="submit" class="wow fadeInDown" data-wow-duration="500ms" data-wow-delay="1.4s">
                        <button type="submit" id="contact-send" class="btn btn-default btn-send hvr-bounce-to-right" value="Send Message">Envoyer</button>
                    </div>                      
                </form>
        </div>
        </div>
    </div>
</section>  

      {/* Call To Action Section Start */}
      <Info/>
    </div>
  )
}
