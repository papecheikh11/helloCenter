import React from 'react'
import '../App.css';

export default function Partenaire() {
  return (
    <div class="row">
        <div class="col-md-4 col-sm-6">
            <figure class="wow fadeInLeft animated portfolio-item" data-wow-duration="500ms" data-wow-delay="0ms">
                <div class="img-wrapper">
                    <img src={require("../imagesHelloCenter/wekiki.png")} class="img-fluid" alt="this is a title"/>
                </div>
                <figcaption>
                <h4 class="text-center">
                <a href="https://www.wekiwi.fr/">
                    WEKIWI
                </a>
                </h4>
            
                </figcaption>
            </figure>
        </div>
        <div class="col-md-4 col-sm-6">
            <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                <div class="img-wrapper">
                    <img src={require("../imagesHelloCenter/AFFINICIA GROUP.jpg")} class="img-fluid" alt="this is a title" />
                    
                </div>
                <figcaption>
                <h4 class="text-center">
                <a href="https://www.affinicia.com/">
                    AFFINICIA GROUP
                </a>
                </h4>
                
                </figcaption>
            </figure>
        </div>
        <div class="col-md-4 col-sm-6">
            <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="300ms">
                <div class="img-wrapper">
                <img src={require("../imagesHelloCenter/lowcostmobile.jpg")} class="img-fluid" alt="this is a title" />
                    
                </div>
                <figcaption>
                <h4 class="text-center">
                <a href="https://lowcostmobile.com/">
                    lowcostmobile
                </a>
                </h4>
                
                </figcaption>
            </figure>
        </div>
        <div class="col-md-4 col-sm-6">
            <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="600ms">
                <div class="img-wrapper">
                <img src={require("../imagesHelloCenter/ma petite facture.jpg")} className="img-fluid" alt="this is a title" />
                   
                </div>
                <figcaption>
                <h4 class="text-center">
                <a href="https://ma-petite-facture.fr/">
                    Ma petite facture
                </a>
                </h4>
                
                </figcaption>
            </figure>
        </div>
        <div class="col-md-4 col-sm-6">
            <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="900ms">
                <div class="img-wrapper">
                <img src={require("../imagesHelloCenter/papernest.png")} className="img-fluid" alt="this is a title" />
                    
                </div>
                <figcaption>
                <h4 class="text-center">
                <a href="https://www.papernest.com/">
                    Papernest
                </a>
                </h4>
                
                </figcaption>
            </figure>
        </div>
        <div class="col-md-4 col-sm-6">
            <figure class="wow fadeInLeft animated" data-wow-duration="500ms" data-wow-delay="1200ms">
                <div class="img-wrapper">
                <img src={require("../imagesHelloCenter/OHM_ENERGY.png")} className="img-fluid" alt="this is a title" />
                    {/* <div class="overlay">
                    </div> */}
                </div>
                <figcaption>
                <h4 class="text-center">
                <a href="https://ohm-energie.com/">
                    OHM ENERGY
                </a>
                </h4>
                
                </figcaption>
            </figure>
        </div>
    </div>
  )
}
