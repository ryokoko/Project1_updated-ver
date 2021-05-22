import React from 'react';
import HomePage from './HomePage/HomePage';
import ResumePage from './ResumePage/ResumePage';
import ServicesPage from './ServicesPage/ServicesPage';
import ContactPage from './ContactPage/ContactPage';

import styled from 'styled-components';

const MainBody = styled.div`
    background-color: #e9e7e7;
`;

const Page = () => (
    <div>
        <MainBody>
            <HomePage />
            <ResumePage />
            <ServicesPage />
            <ContactPage />
        </MainBody> 
    </div>
)

export default Page;