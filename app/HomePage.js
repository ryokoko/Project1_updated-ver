import React from 'react';

const HomePage = () => (
    <div>
        <section class="home__page">
            <div class="main">
                <div class="container home__header">
                    <div class="row margin-auto">
                        <div class="col-md-4">
                            <div class="header__photo">
                                <img src="./images/profile_img.jpg" alt="profile photo" />
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="title-block">
                                <h1>Rebecca Li</h1>
                                <div class="title">Junior Radiographer</div>
                            </div>
                            <div class="icons">
                                <a href="https://www.linkedin.com/in/liangzi-li-stella/" target="_blank" class="fa fa-linkedin"></a>
                                <a href="https://github.com/ryokoko" target="_blank" class="fa fa-facebook"></a>
                                <a href="https://www.instagram.com/ryoko.r_/" target="_blank" class="fa fa-instagram"></a>
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="container home__content">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="about-me">
                                <h3>About Me</h3>
                                <div>Hi there! My name is Rebecca. I am a highly motivated 2020 radiography graduate from
                                the University of Sydney. I enjoy providing high-quality care to the general public and 
                                working in a team environment, whilst maintaining independence. I have worked in both 
                                hospitals and fast-paced private practices.</div>
                            </div>                    
                        </div>
                        <div class="col-md-6">
                            <ul class="about-details">
                                <li>
                                    <span class="details__key">Education</span><span class="details__value">Associate of Applied Science: Diagnostic Radiography</span>
                                </li>
                                <li>
                                    <span class="details__key">Residence</span><span class="details__value">Australia</span>
                                </li>
                                <li>
                                    <span class="details__key">Email</span><span class="details__value"><a href="mailto:lrzrebecca@noname.com">lrzrebecca@noname.com</a></span>
                                </li>
                                <li>
                                    <span class="details__key">Mobile</span><span class="details__value">+61 040 6678 889</span>
                                </li>
                                <li>
                                    <span class="details__key">Address</span><span class="details__value">123 Nonamelane, Box Hill VIC 3128</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;
