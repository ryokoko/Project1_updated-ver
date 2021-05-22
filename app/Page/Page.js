import React from 'react';
import HomePage from './HomePage/HomePage';
import ResumePage from './ResumePage/ResumePage';
import ServicesPage from './ServicesPage/ServicesPage';
import ContactPage from './ContactPage/ContactPage';

import styled from 'styled-components';

const MainBody = styled.div`
    background-color: #e9e7e7;
`;


const Page = () => {
    const page ='HOME';

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
        <div className="pages"> 
            { page === 'HOME' && (<HomePage />) }
            { page === 'RESUME' && (<ResumePage />) }
            { page === 'SERVICES' && (<ServicesPage />) }
            { page === 'CONTACT' && (<ContactPage />) }

        </div>
    )
}

export default Page;