import React from 'react'
import '../App.css';
import Partenaire from './partenaire';
import Info from './Info';

export default function Apropos() {
  return (
    <div>
        {/* Global Page Section Start */}
        <section class="global-page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <h2>A propos de nous</h2>
                            <ol class="breadcrumb list-inline text-center">
                                <li class="list-inline-item">
                                    <a href="index.html">
                                        <i class="ion-ios-home"></i>
                                        Accueil &nbsp; &nbsp;/
                                    </a>
                                </li>
                                <li class="active list-inline-item">Qui sommes nous</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Company Description Section Start */}
        <section class="company-description">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 wow fadeInLeft" data-wow-delay=".3s" >
                        <img src={require("../imagesHelloCenter/image00020.jpg")} alt="" class="img-fluid" />
                    </div>
                    <div class="col-md-6">
                        <div class="block">
                            <h3 class="subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration="500ms">POURQUOI NOUS SOMMES DIFFÉRENTS</h3>
                            <p  class="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="500ms" style={{ textAlign: "justify", textJustify: "inter-word"}}>
                                Hello center est diffèrent des autres par sa philosophie qui s’articule autour de valeurs telles que la famille, le bon climat social, le respect des collaborateurs, la jeunesse, La transparence concernant le travail etc…</p>
                                <p  class="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="500ms" style={{textAlign: "justify", textJustify: "inter-word"}}>
                                    L’ambiance et La proximité qui existe entre la direction et les agents sont un véritable atout pour l’entreprise et engendre l’implication de tous.</p>
                                    <p  class="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="500ms" style={{textAlign:"justify", textJustify:"inter-word"}}>
                                    Nous avons une équipe jeune, dynamique et très motivé ayant le goût du challenge et de la réussite.
                                    Nous sommes prêts à travailler avec tous les clients ayant besoin de service de télécommunication et sommes prêt à recruter le maximum de jeunes possible pour l’atteinte des objectifs que nous fixent nos clients.
                                    Nous bâtissons une relation de confiance tant avec nos clients qu’avec nos collaborateurs afin de mieux garantir un bon climat avec toute l’équipe concernée par l’activité en particulier.

                            </p>
                            <p  class="wow fadeInUp" data-wow-delay=".7s" data-wow-duration="500ms">
                                Nous prônons Le Respect, La Confiance, L’Excellence et L’Innovation. Ce sont nos valeurs.
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Company Feature Section Start */}
        <section class="about-feature clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-4 px-0">
                        <div class="block about-feature-1 wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">
                            <h2> Pourquoi nous choisir</h2>
                            <p style={{textAlign:"justify", textJustify:"inter-word"}}>
                                Notre expérience est votre garanti et votre bénéfice car nous somme composer d’une équipe très expérimentée dans le domaine de la relation clientèle ;
        
                                Pour nos clients, nous s’adaptons nos stratégies à leurs besoins afin de satisfaire à leurs exigences tout en leur fournissant une prestation de qualité garantie.

                                En ce qui concerne nos collaborateurs, nous leur garantissons un cadre de travail conviviale et maintenu tout en les accompagnants à trouver une solution de carrière chez HELLO CENTER.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 px-0">
                        <div class="block about-feature-2 wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                            <h2 class="item_title">Ce que vous obtenez</h2>
                            <p style={{textAlign:"justify", textJustify:"inter-word"}}>
                                Vous avez un meilleur rendement sur l’accroissement du chiffre d’affaire qui s’articule autour d’une prestation de qualité
                            </p>
                            <p>
                                Un épanouissement des collaborateurs grâce à<br/> un management de proximité, <br/>fun dynamique, <br/> et rigoureux avec un plan de rémunération attractif.
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-4 px-0">
                        <div class="block about-feature-3 wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".7s">
                            <h2 class="item_title">
                            Rencontrez l'énergie
                            </h2>
                            <p style={{textAlign:"justify", textJustify:"inter-word"}}>
                                Nous avons une équipe jeune, dynamique et très motivé ayant le goût du challenge et de la réussite.
                                Nous sommes prêts à travailler avec tous les clients ayant besoin de service de télécommunication et sommes prêt à recruter le maximum de jeunes possible pour l’atteinte des objectifs que nous fixent nos clients.
                                Nous bâtissons une relation de confiance tant avec nos clients qu’avec nos collaborateurs afin de mieux garantir un bon climat avec toute l’équipe concernée par l’activité en particulier.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section Start */}
        <section id="team">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="subtitle text-center">Rencontrer l'équipe</h2>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".3s">
                            <div class="team-img">
                                <img src="images/team/team-1.jpg" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">Esperance SECK</h3>
                            <p class="team_designation">Responsable Production</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>J’ai débuté à Hello Center en Septembre 2021 en tant que Téléprospectrice. Aujourd'hui j'occupe le poste de Responsable Production en moins d'un an. 
                                Il y a toujours cette joie de vivre et cette ambiance familiale. 
                                "servir notre passion, la qualité notre voie" et nous travaillons chaque jour pour ça.
                            </p>     
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                            <div class="team-img">
                                <img src="images/team/team-2.jpg" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">Brelotte FALL</h3>
                            <p class="team_designation">Fondateur & Directeur Général</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>Avec 9ans d'expériences qui m'ont permis de capitaliser du savoir sur la gestion de la relation clientèle et de mettre en place cette structure, Hello Center est pour moi une âme vivante qui se nourrit non seulement de compétences mais également d'éthiques sur lesquelles nous marchons au quotidien.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                            <div class="team-img">
                                <img src="images/team/team-3.png" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">Ndeye Maguette TALL</h3>
                            <p class="team_designation">Assistante de Direction</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>J’ai eu ma première expérience professionnelle à Hello Center pour occuper le poste d’Assistante de Direction.
                                Ce poste m’a permis aujourd’hui de développer mes compétences commerciales, ainsi que ma communication. Il m’a également permis d’être mieux organisée et surtout de devenir une meilleure version de moi-même. Merci à HELLO CENTER
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                            <div class="team-img">
                                <img src="images/team/team-4.jpg" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">Johnson FALL</h3>
                            <p class="team_designation">Fondateur & Responsable Projet</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>Des salutations à toute l’équipe et encore merci pour votre support, votre professionnalisme et la motivation que vous nous transmettez, ce qui aide tous et chacun à passer l’étape, les étapes difficiles de ne pas avoir des gens sur qui comptaient au quotidien car HC est une Famille.</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".3s">
                            <div class="team-img">
                                <img src="images/team/team-5.jpg" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">RACHID GOMIS </h3>
                            <p class="team_designation">Téléconseiller</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>Un trés bon centre dont le travail est surtout basé sur la qualité. Une équipe jeune et accueillante, une vraie famille! Et c'est trés possible d'évoluer au sein de l'entreprise. Sans experience il ya quelques mois, j'ai étè formé dans le centre et aujourd'hui j'y travaille</p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                            <div class="team-img">
                                <img src="images/team/team-6.png" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">ADAMA DIOP </h3>
                            <p class="team_designation">Téléconseillère</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>Je profite de ce moment pour remercier toute l’équipe de hello center qui met en avant l’intérêt de ces collaborateurs(agents) choses très rares ce me fais dire enfin j’ai trouvé du vrai professionnalisme.</p>
                            
                        </div>
                    </div>
                <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                            <div class="team-img">
                                <img src="images/team/team-7.png" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">THIERNO NIANG</h3>
                            <p class="team_designation">Ressource Humaine & Comptable</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>Avec plus de 5 ans d'expériences, j’ai intégré HELLO CENTER avec qui je partage la même vision.
                                En tant que responsable RH nous accordons une attention particulière à l’évolution de nos collaborateurs en leur confiant des responsabilités par la diversité de nos projets.
                                Je ressens au sein de cette entreprise à taille humaine, un réel « esprit d’équipe ». 
                                De plus, les co-fondateurs de la société sont accessibles et à l’écoute des collaborateurs, ce qui fait le petit plus de HELLO CENTER ».
                            </p>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="team-member wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                            <div class="team-img">
                                <img src="images/team/team-8.png" class="team-pic" alt="" />
                            </div>
                            <h3 class="team_name">BARA FALL</h3>
                            <p class="team_designation">Responsable Production</p>
                            <p class="team_text" style={{textAlign:"justify", textJustify:"inter-word"}}>Difficile de résumer les raisons pour lesquelles je suis heureux d'avoir choisi Hello Center, l'importance donnée au contact humain et au bonheur au travail, le développement personnel et professionnel, le transfert de connaissances en interne et la force d'une entité qui a su conservé ses valeurs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      {/* Clients Section Start */}
        <section id="clients">
        <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2 class="subtitle text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay=".3s">Nos Partenaires</h2>
            
                <Partenaire />
            </div>
        </div>
        </div>
        </section>
        
        {/* Call To Action Section Start */}
        <Info/>
    </div>
  )
}
