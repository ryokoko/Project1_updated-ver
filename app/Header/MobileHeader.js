import React from 'react';

import styled from 'styled-components';

import { LogoStyle, Highlight } from './components/LogoStyle';

/* Styled components */
const MobileHead = styled.div`
    height: 60px;
    width: 100%;
    background-color: #fdd371;
    color: #524c49;
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);  

    @media (min-width: 768px) {
        display: none;
    }
`;

const MobileLogo = styled(LogoStyle)`
    margin-left: 20px;
    padding-top: 5px;
`;

const Sidebar = styled.div`
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 20;
    top: 0;
    right: 0;
    background-color: #fdd371;
    color: #524c49;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
`;

const SidebarItem = styled.a`
    padding: 10px;
    display: block;
    transition: 0.3s;
    font-size: 2rem;
    color: #524c49;
    text-align: center;

    &:hover {
        color: #524c49;
    }
    &:active {
        color: #f99f6f;
    }
`;
/* 改props btn状态 */
const SidebarBtn = styled(SidebarItem)`
    float: right;
    cursor: pointer;
    margin: 10px 20px;
    font-size: 30px;

    &:hover {
        color: #f99f6f;
    }

`;

const OpenBtn = styled.div`
    float: right;
    cursor: pointer;
    margin: 10px 20px;
    font-size: 30px;
`;
const MobileHeader = () => (
    <MobileHead>
            <MobileLogo>Rebecca <Highlight>Li</Highlight></MobileLogo>
            <Sidebar id="sidebar">
                <SidebarBtn href='javascript:void(0)' id='btn--close'>&times;</SidebarBtn>
                <SidebarItem class="tab tab__home">Home</SidebarItem>
                <SidebarItem class="tab tab__resume">Resume</SidebarItem>
                <SidebarItem class="tab tab__services">Services</SidebarItem>
                <SidebarItem class="tab tab__contact">Contact</SidebarItem>
            </Sidebar>
            <OpenBtn>&#9776;</OpenBtn>        
    </MobileHead>
)

export default MobileHeader;