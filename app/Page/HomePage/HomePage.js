import React from 'react';
/* import { Row, Col } from 'react-bootstrap'; */

import styled from 'styled-components';
import MainSection from '../components/MainSection';
import Flex from '../../../Components/Flex';


const HomeHeader = styled(Flex)`
    background-image: url('./Images/title_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 10px 10px 0 0;
    padding: 30px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
    
`;

const ProfilePhoto = styled.div`
    max-width: 200px;
    margin: 0 auto;
    @media (min-width: 768px) {
        flex: 40%;
    }
    @media (max-width: 768px) {
        flex: 100%;
    }
`;

const Avatar = styled.img`
    height: auto;
    max-width: 100%;
`;

const TitleBlock = styled.div`
    text-align: center;
    padding: 2%;
    @media (min-width: 768px) {
        flex:60%;
    }
    @media (max-width: 768px) {
        flex:100%;
    }
`;

const SocialIcons = styled.div`
    text-align: center;
    padding: 2%;
    a {
        font-size: 3rem;
        color: #524c49;
        padding: 1%;
        transition: 0.2s;
        text-decoration: none;
        &:hover {
            color: #f99f6f;
            text-decoration: none;
            transform: translate(0, -2px);
        }
        &:visited {
            text-decoration: none;
        }
    }
`;

const HomeContent = styled(Flex)`
    font-size: 1.5rem;
    width: 100%;
    padding: 20px 30px;
`;

const PersonalDetails = styled.ul`
    margin-top: 20px;
    list-style-type: none;
    padding: 0;
`;

const DetailItem = styled.li`
    margin-top: 10px;
`;

const DetailKey = styled.span`
    min-width: 100px;
    color: #f99f6f;
    display: inline-block;
`;

const DetailValue = styled.span`
    color: #524c49;
    a {
        text-decoration: none;
        color: #f99f6f;
        &:hover {
            text-decoration: none;
        }
    }

`;



const HomePage = () => (
    <div>
        <MainSection>
                <HomeHeader>                   
                    <ProfilePhoto>
                        <Avatar src="./Images/profile_img.jpg" alt="profile photo" />
                    </ProfilePhoto>
                    <TitleBlock>
                        <h1>Rebecca Li</h1>
                        <div class="title">Junior Radiographer</div>
                    </TitleBlock>
                    <SocialIcons>
                        <a href="https://www.linkedin.com/in/liangzi-li-stella/" target="_blank" class="fa fa-linkedin" />
                        <a href="https://github.com/ryokoko" target="_blank" class="fa fa-facebook" />
                        <a href="https://www.instagram.com/ryoko.r_/" target="_blank" class="fa fa-instagram" />
                    </SocialIcons>
                </HomeHeader>
                <HomeContent>
                            <div>
                                <h3>About Me</h3>
                                <div>Hi there! My name is Rebecca. I am a highly motivated 2020 radiography graduate from
                                the University of Sydney. I enjoy providing high-quality care to the general public and 
                                working in a team environment, whilst maintaining independence. I have worked in both 
                                hospitals and fast-paced private practices.</div>
                            </div>                    
                            <PersonalDetails>
                                <DetailItem>
                                    <DetailKey>Education</DetailKey><DetailValue>Associate of Applied Science: Diagnostic Radiography</DetailValue>
                                </DetailItem>
                                <DetailItem>
                                    <DetailKey>Residence</DetailKey><DetailValue>Australia</DetailValue>
                                </DetailItem>
                                <DetailItem>
                                    <DetailKey>Email</DetailKey><DetailValue><a href="mailto:lrzrebecca@noname.com">lrzrebecca@noname.com</a></DetailValue>
                                </DetailItem>
                                <DetailItem>
                                    <DetailKey>Mobile</DetailKey><DetailValue>+61 040 6678 889</DetailValue>
                                </DetailItem>
                                <DetailItem>
                                    <DetailKey>Address</DetailKey><DetailValue>123 Nonamelane, Box Hill VIC 3128</DetailValue>
                                </DetailItem>
                            </PersonalDetails>
                </HomeContent>
        </MainSection>     
    </div>
);

export default HomePage;
