import React from 'react'
import '../App.css';
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaHeadset } from "react-icons/fa";
import { MdCoPresent } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import Partenaire from './partenaire';
import Info from './Info';


export default function Accueil() {
  return (
    <div>
            {/* <!--
        ==================================================
        Slider Section Start
        ================================================== --> */}
        <section id="hero-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="block wow fadeInUp" data-wow-delay=".3s">
                        
                        {/* <!-- Slider --> */}
                        <div className="cd-intro">
                            <h1 className="d-flex flex-column wow fadeInUp animated cd-headline slide" data-wow-delay=".4s" >
                                <span>BIENVENUE</span>
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">HELLO CENTER</b>
                                </span>
                            </h1>
                        </div> 
                            {/* <!-- cd-intro -->
                            <!-- /.slider --> */}
                            <h2 className="wow fadeInUp animated" data-wow-delay=".6s" >
                                «HELLO CENTER» est un centre d’appel qui exerce son activité en termes d’émission et de réception d’appel, particulièrement sur de la Prise de Rendez-vous, de la vente, de l’enquête, de service après-vente, de la Formation en Ligne ou en présentielle 
                            </h2>
                            <a class="btn-lines dark light wow fadeInUp animated btn btn-default btn-green hvr-bounce-to-right" data-wow-delay=".9s" href="/Apropos" target="_blank">En Savoir Plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* About Section about */}
        <section id="about">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-6">
                        <div className="block wow fadeInLeft" data-wow-delay=".3s" data-wow-duration="500ms">
                            <h1 className='d-flex flex-column'>
                                <span>Pourquoi</span>
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">HELLO CENTER ?</b>
                                </span>
                            </h1>
                            <p>
                                Chez HELLO CENTER, nous nous engageons à offrir des services de qualité dans le domaine des centres d'appel, tout en contribuant activement au développement de notre communauté locale. Basés à Ouakam-Dakar, au Sénégal, nous avons fait le choix de placer l'humain au cœur de notre activité. Nous croyons fermement au potentiel de notre jeunesse et à l'importance de leur offrir des opportunités d'emploi et de formation.
                            </p>
                            <p>
                                Notre centre d'appel se distingue par sa diversité de services, incluant la prise de rendez-vous, la vente, les enquêtes, le service après-vente, ainsi que des formations en ligne et en présentiel. Grâce à une équipe dynamique et bien formée, nous assurons une prise en charge rapide et efficace des besoins de nos clients.
                            </p>
                            <p>
                                Rejoignez-nous dans cette aventure, et faites de HELLO CENTER votre partenaire de confiance pour vos besoins en centre d’appel.
                            </p>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="d-flex justify-content-center align-items-center block wow fadeInRight" data-wow-delay=".3s" data-wow-duration="500ms">
                            <img src={require('../imagesHelloCenter/mediatmpIMG_6629.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section Start */}
        <section id="works" class="works">
            <div class="container">
                <div class="section-heading">
                    <h1 class="title wow fadeInDown" data-wow-delay=".3s">Ils nous ont fait confiance</h1>
                    <p class="wow fadeInDown" data-wow-delay=".5s">
                        Nos clients sont des professionnels qui sont généralement basés en Europe, en Amérique ou même dans le pays et peuvent être des opérateurs Téléphoniques, des entreprises commerciales, etc… et nous entretenons une relation de confiance avec eux et travaillons dans le long terme.

                    </p>
                </div>
                <Partenaire />
            </div>
        </section>

        {/* Portfolio Section Start */}

        <section id="services">
            <div class="container">
                <div className="section-heading" style={{textAlign: "center"}}>
                    <h1 class="title wow fadeInDown" data-wow-delay=".3s">Ce que nous pouvons faire pour vous !</h1>
                    <p class="wow fadeInDown" data-wow-delay=".5s">
                        <span>
                        Nous travaillons selon la demande du client et faisons tout notre possible pour atteindre les objectifs fixés par 
                        </span><br/>
                        <span>celui-ci et respectons ses exigences. Nous proposons comme services : </span>

                    </p>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6 text-center">
                        <div class="media wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms">
                            <div class="iconeService"><FaHeadset / ></div>
                            <div class="media-body">
                                <h4 class="media-heading">Service Client</h4>
                                <p>
                                    Notre service client prend en charge vos appels, emails, et réclamations, tout en offrant un suivi personnalisé des commandes. Nous nous assurons que chaque interaction renforce la satisfaction de vos clients et contribue à leur fidélisation.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="600ms">
                            <div class="iconeService"><MdCoPresent /></div>
                            <div class="media-body">
                                <h4 class="media-heading">Télévente</h4>
                                <p>
                                    Nos experts en télévente détectent des leads qualifiés et maximisent vos ventes grâce à des campagnes ciblées d'up-selling, cross-selling, et prise de rendez-vous. Nous optimisons chaque contact pour augmenter votre chiffre d'affaires.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                            <div class="iconeService"><RiCustomerService2Fill/ ></div>
                            <div class="media-body">
                                <h4 class="media-heading">Prise de rendez-vous</h4>
                                <p>
                                 Nous générons des opportunités de vente en prenant des rendez-vous qualifiés et en créant des besoins chez vos prospects. Nos campagnes d'informations assurent une communication efficace et ciblée avec votre audience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 text-center">
                        <div class="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="900ms">
                            <div class="iconeService"><RiSurveyLine / ></div>
                            <div class="media-body">
                                <h4 class="media-heading">Sondage</h4>
                                <p>
                                 Nous générons des opportunités de vente en prenant des rendez-vous qualifiés et en créant des besoins chez vos prospects. Nos campagnes d'informations assurent une communication efficace et ciblée avec votre audience.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1200ms">
                            <div class="media-left">
                                
                            </div>
                            <div class="media-body">
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1500ms">
                            <div class="media-left">
                                
                            </div>
                        
                            {/* <div class="col-md-12 text-center">
                                <div class="block wow fadeInUp" data-wow-delay=".3s">
                                            <a class="btn-lines dark light wow fadeInUp animated btn btn-default btn-green hvr-bounce-to-right" data-wow-delay=".9s" href="/#services" target="_blank">En Savoir Plus
                                            </a> <a href="/#services"><span class="iconify" data-icon="ion:arrow-forward-circle-sharp" style={{color: "#00a4ba"}} data-width="50" data-height="50"></span></a>
                                </div>
                            </div> */}
                    
                            <div class="col-sm-6 col-lg-4">
                                <div class="media wow fadeInDown animated" data-wow-duration="500ms" data-wow-delay="1800ms">
                                    <div class="media-left">
                                        
                                    </div>
                                    <div class="media-body">
                                        
                                    </div>
                                </div>
                            </div>
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
