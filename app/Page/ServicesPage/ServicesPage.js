import React from 'react';

import { Carousel } from 'react-bootstrap';

const ServicesPage = () => (
    <div>
        <section class="services__page">
            <div class="main">
                <div class="header--general">
                    <h2>Services</h2>
                </div>
                <div class="container content--general">
                    <h2>My Services</h2>
                    <div class="row margin-auto">
                        <Carousel id="carousel" class="carosel slide col-12" data-ride="carousel">
                            <ol id="carousel-indicators" class="carousel-indicators">
                                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                                <li data-target="#carousel" data-slide-to="1"></li>
                                <li data-target="#carousel" data-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <img src="images/serv1.jpg" alt="MRI machine" />
                                </div>
                                <div class="item">
                                    <img src="images/serv2.jpg" alt="office" />
                                </div>
                                <div class="item">
                                    <img src="images/serv3.jpg" alt="MRI machine1" />
                                </div>
                            </div>
                        </Carousel>
                        <div class="row margin-auto margin-top">
                            <div class="service__block col-sm-3">
                                <div class="service__icon">
                                    <span class="material-icons">accessibility</span>
                                </div>
                                <h4 class="service__title">Specialised Radiography</h4>
                            </div>
                            <div class="service__block col-sm-3">
                                <div class="service__icon">
                                    <span class="material-icons">leak_add</span>
                                </div>
                                <h4 class="service__title">Magnetic Resonance Imaging (MRI)</h4>
                            </div>
                            <div class="service__block col-sm-3">
                                <div class="service__icon">
                                    <span class="material-icons">elderly</span>
                                </div>
                                <h4 class="service__title">Bone Mineral Densitometry (BMD)</h4>
                            </div>
                            <div class="service__block col-sm-3">
                                <div class="service__icon">
                                    <span class="material-icons">tag_faces</span>
                                </div>
                                <h4 class="service__title">Dental X-Ray (OPG)</h4>
                            </div>
                        </div>
                    </div>
                    <h2>Testimonials</h2>
                        <div class="row client__box margin-auto">
                            <div class="client__block col-sm-4">
                                <blockquote>Rebecca is really into radiography and always has passion to learn 
                                    something new during her placement. 
                                </blockquote>
                                <div class="client__image">
                                    <img src="./images/clients/raju.jpg" alt="Suresh Raju" />                                                               
                                </div>      
                                <p class="client__name">Suresh Raju, Chief Radiographer of Fairfield Hospital</p>                                                
                            </div>
                            <div class="client__block col-sm-4">
                                <blockquote>During her last placement at St. George, she had developed 
                                    an in-depth knowledge in the field, and had improved a lot in various 
                                    professional skills since she came here.
                                </blockquote>
                                <div class="client__image">
                                    <img src="./images/clients/katsaros.jpg" />                               
                                </div>
                                <p class="client__name">George Katsaros, Chief Radiographer of St. George Hospital</p>                           
                            </div>
                            <div class="client__block col-sm-4">
                                <blockquote>She is a fast-learner, a warm associate at the 
                                    clinic. Never felt shy to ask seniors about problems. A 
                                    good team player.
                                </blockquote>
                                <div class="client__image">
                                    <img src="./images/clients/stotch.jpg" />                               
                                </div>
                                <p class="client__name">Butters Stotch, Chief Radiographer of HIS Mt Druitt</p>
                            </div>
                        </div> 
                </div>                 
            </div>
        </section>
    </div>

    
);

export default ServicesPage;