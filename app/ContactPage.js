import React from 'react';

const ContactPage = () => (
    <div>
        <section class="contact__page">
            <div class="main">
                <div class="header--general">
                    <h2>Contact</h2>
                </div>
                <div class="content--general container">
                    <div class="row">
                        <div class="col-sm-6">
                            <h3>Stay in Touch</h3>
                            <div id="map"></div>
                            <div class="contact__details">
                                <div class="contact__row">
                                    <span class="material-icons">place</span>
                                    Melbourne, Australia
                                </div>
                                <div class="contact__row">
                                    <span class="material-icons">email</span>
                                    <a href="mailto:lrzrebecca@noname.com">lrzrebecca@noname.com</a>
                                </div>
                                <div class="contact__row">
                                    <span class="material-icons">call</span>
                                    +61 040 6678 889 
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 container">
                            <h3>Contact Form</h3>
                                <form action="https://formspree.io/f/xbjqlnoe" method="POST">
                                        <div class="selection--radio">
                                            Choose the option that best suits your situation:
                                            <div>
                                                <input type="radio" id="patient" name="person" value="patient" />
                                                <label for="patient">I'm a patient</label>
                                            </div>
                                            <div>
                                                <input type="radio" id="doctor" name="person" value="doctor" />
                                                <label for="doctor">I'm a referring doctor</label>
                                            </div>                                      
                                        </div>                      
                                    <div class="row">
                                        <label class="col-md-4" for="name">Your name:</label>
                                        <input class="col-md-8" type="name" placeholder="Your name..." />
                                    </div>
                                    <div class="row">
                                        <label class="col-md-4">Your email:</label>
                                        <input class="col-md-8" type="email" name="_replyto" placeholder="Your email..." />
                                    </div>
                                    <div class="row">
                                        <label class="col-md-4" for="enquiries">Type of enquiry:</label>
                                        <select id="enquiries" class="col-md-8" name="enquiries">
                                            <option value="general enquiry">General enquiries</option>
                                            <option value="appointment">Appointment</option>
                                            <option value="others">Others (please specify at below)</option>
                                        </select>
                                    </div>
                                    <div class="row">
                                        <label class="col-md-4">Your message:</label>
                                        <textarea class="col-md-8" name="message" placeholder="Leave your message..."></textarea>
                                    </div>
                                    <button type="submit" class="btn--submit">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
         </section>
    </div>
);

export default ContactPage;