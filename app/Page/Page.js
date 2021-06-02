import React from 'react';
import HomePage from './HomePage';
import ResumePage from './ResumePage';
import ServicesPage from './ServicesPage';
import ContactPage from './ContactPage';

import styled from 'styled-components';

const PageContainer = styled.div`
    position: relative;
    z-index: 5;
`;

const Page = ({ activePage }) => {
    /* const page ='HOME'; */

    /* const pageMap = {
        HOME: (<HomePage />),
        RESUME: (<ResumePage />),
        SERVICES: (<ServicesPage />),
        CONTACT: (<ContactPage />),
    }; 

    const currentPage = pageMap[page]; */
    /* <div>
        <MainBody>
            <HomePage />
            <ResumePage />
            <ServicesPage />
            <ContactPage />
        </MainBody> 
    </div> */
    //return {currentPage}

    //jsx中的boolean，null，undefined，[]值不会被render出来，而0可以
    //{}不被接受
    //因此下面的短路计算就是表达了falsy的页面是不会被渲染
    

    return (
        <PageContainer className="pages"> 
            { activePage === 'HOME' && (<HomePage />) }
            { activePage === 'RESUME' && (<ResumePage />) }
            { activePage === 'SERVICES' && (<ServicesPage />) }
            { activePage === 'CONTACT' && (<ContactPage />) }

        </PageContainer>
    )
}

export default Page;