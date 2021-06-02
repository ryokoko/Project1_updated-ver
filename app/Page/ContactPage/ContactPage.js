import React from 'react';

import styled from 'styled-components';
import MainSection from '../components/MainSection';
import GeneralHeader from '../components/GeneralHeader';
import { ContentTitle, GeneralContent } from '../components/ContentStyle';

import FlexBlock from '../../../Components/FlexBlock';
import GoogleMap from '../components/GoogleMap';


const ContactContainer = styled(FlexBlock)`

`;
const Contact = styled.div`
    flex: 50%;
    margin-right: 10px;
`;

const ContactDetail = styled.div`
    span {
        margin-right: 10px;
        color: #f99f6f;
    }
`;

const ContactForm = styled.div`
    flex: 50%;
    margin-left: 10px;
    label {
        color: #524c49;
        width: 150px;
    }
    input, textarea, select {
        width: 100%;
        padding: 5px 2%;
        margin: 2% 0;
        border-radius: 5px;
        border: 1px solid #e9e7e7;
        &:focus {
            border: 3px solid #f99f6f;
        }
    }
    input[type="radio"] {
        width: 20px;
        padding-left: 2%;
    }


`;



const ContactPage = () => {
    const contactItems = [
        {key: 'place', value: 'Melbourne, Australia', },
        {key: 'email', value: 'lrzrebecca@noname.com', },
        {key: 'call', value: '+61 040 6678 889', }
    ];


    return (
        <div>
            <MainSection>
                <GeneralHeader>
                    <h2>Contact</h2>
                </GeneralHeader>
                <GeneralContent>
                    <ContactContainer>
                    <Contact>
                        <ContentTitle>
                            <h3>Stay in Touch</h3>
                        </ContentTitle>
                        <GoogleMap />
                        <div>
                        {
                            contactItems.map((item) => (
                                <ContactDetail>
                                    <span class="material-icons">{item.key}</span>
                                    {item.value}
                                </ContactDetail>
                            ))
                        }
                        </div>
                    </Contact>
                    <ContactForm>
                        <ContentTitle>
                            <h3>Contact Form</h3>
                        </ContentTitle>
                        
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
                            <div>
                                <label for="name">Your name:</label>
                                <input type="name" placeholder="Your name..." />
                            </div>
                            <div>
                                <label>Your email:</label>
                                <input type="email" name="_replyto" placeholder="Your email..." />
                            </div>
                            <div>
                                <label for="enquiries">Type of enquiry:</label>
                                <select id="enquiries" name="enquiries">
                                    <option value="general enquiry">General enquiries</option>
                                    <option value="appointment">Appointment</option>
                                    <option value="others">Others (please specify at below)</option>
                                </select>
                            </div>
                            <div>
                                <label>Your message:</label>
                                <textarea name="message" placeholder="Leave your message..."></textarea>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </ContactForm>
                    </ContactContainer>
                </GeneralContent>
         </MainSection>
    </div>
);
}

export default ContactPage;