import React from 'react';

import ImageCarousel from '../../Page/components/ImageCarousel';

import styled from 'styled-components';
import MainSection from '../components/MainSection';
import GeneralHeader from '../components/GeneralHeader';
import { ContentTitle, GeneralContent } from '../components/ContentStyle';
import Flex from '../../../Components/Flex';
import FlexBlock from '../../../Components/FlexBlock';

const Services = styled(FlexBlock)`
`;

const ServiceBlock = styled.div`
    padding: 2% 5%;
    background-color: rgba(245, 227, 63, 0.267);
    position: relative;
    text-align: center;
    height: auto;
    &:hover {
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    span {
        color: #f99f6f;
    }
`;

const Clients = styled(FlexBlock)`
    position: relative;
    justify-content: space-around;
`;

const ClientBlock = styled.div`
    blockquote {
        border: none;
        font-family: Georgia, serif;
        font-style: italic;
        text-align: center;
        position: relative;

        &::before {
            display: block;
            content: "“";
            font-size: 80px;
            position: absolute;
            left: -15px;
            top: -10px;
            color: #7a7a7a;
        }
    }
    img {
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
    p {
        padding: 10px;
    }
`;


const ServicesPage = () => {

    const serviceItems = [
        {key: 'accessibility', title: 'Specialised Radiography', },
        {key: 'leak_add', title: 'Magnetic Resonance Imaging (MRI)', },
        {key: 'elderly', title: 'Bone Mineral Densitometry (BMD)', },
        {key: 'tag_faces', title: 'Dental X-ray (OPG)', },
    ];

    const clientItems = [
        {
            quote: 'Rebecca is really into radiography and always has passion to learn something new during her placement.',
            avatar: "./images/clients/raju.jpg",
            alt: "Suresh Raju",
            name: 'Suresh Raju, Chief Radiographer of Fairfield Hospital',
        },
        {
            quote: 'During her last placement at St. George, she had developed an in-depth knowledge in the field, and had improved a lot in various professional skills since she came here.',
            avatar: "./images/clients/katsaros.jpg",
            alt: "George Katsaros",
            name: 'George Katsaros, Chief Radiographer of St. George Hospital',
        },
        {
            quote: 'She is a fast-learner, a warm associate at the clinic. Never felt shy to ask seniors about problems. A good team player.',
            avatar: "./images/clients/stotch.jpg",
            alt: "Butters Stotch",
            name: 'Butters Stotch, Chief Radiographer of HIS Mt Druitt',
        },
    ];

    return (
        <div>
            <MainSection>
                <GeneralHeader>
                        <h2>Services</h2>
                </GeneralHeader>
                <GeneralContent>
                    <ContentTitle>My Services</ContentTitle>

                        <ImageCarousel />
                        <Services>
                        {
                            serviceItems.map((item) => (
                                <ServiceBlock>
                                    <div>
                                        <span class="material-icons">{item.key}</span>
                                    </div>
                                    <h4>{item.title}</h4>
                                </ServiceBlock>
                            ))
                        }
                        </Services>

                    <ContentTitle>Testimonials</ContentTitle>
                        <Clients>
                        {
                            clientItems.map((item) => (
                                <ClientBlock>
                                    <blockquote>{item.quote}</blockquote>
                                    <img src={item.avatar} alt={item.alt} />
                                    <p>{item.name}</p>
                                </ClientBlock>
                            ))

                        }
                            
                        </Clients> 
                </GeneralContent>
            </MainSection>
        </div>    
    )
};

export default ServicesPage;