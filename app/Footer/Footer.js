import React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0px;
    z-index: 1;
    font-size: 1rem;
    width: 100%;
    text-align: center;
    a {
        color: #f99f6f;
        text-decoration: none;
    }

`;

const Footer = () => (
    <FooterContainer>
        <div>
            © 2021 All rights reserved. Designed by <a href="https://github.com/ryokoko">Stella</a>.
        </div>
    </FooterContainer>
)

export default Footer;