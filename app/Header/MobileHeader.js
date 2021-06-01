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
    height: 100vh;
    width: ${(props) => props.clicked? '70%':'0px'}; 
    position: fixed;
    z-index: 20;
    top: 60px;
    right: 0;
    background-color: #fdd371;
    color: #524c49;
    overflow-x: hidden;
    padding-top: 50px;
    transition:  0.5s/* ${(props) => props.clicked ? '0.5s': '0.5s'} */; 
    transform: ${(props) => props.clicked ? '60px': '0px'}; 
`;

const SidebarItem = styled.a`
    padding: 10px;
    display: block;
    transition: 0.3s;
    font-size: 2rem;
    color: #524c49;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: #524c49;
    }
    &:active {
        color: #f99f6f;
    }
`;

const OpenBtn = styled.div`
    float: right;
    cursor: pointer;
    margin: 10px 20px;
    font-size: 30px;
`;
const MobileHeader = ({onSidebarOpen, clicked, activePage, onPageChange}) => {

    const navBarItems = [
        {key: 'HOME', value: 'Home',},
        {key: 'RESUME', value: 'Resume',},
        {key: 'SERVICES', value: 'Services',},
        {key: 'CONTACT', value: 'Contact',},
    ];

  
    return (
    <MobileHead>
            <MobileLogo>Rebecca <Highlight>Li</Highlight></MobileLogo>
            <Sidebar clicked={clicked}>
                {
                    navBarItems.map((item) => (
                        <SidebarItem onClick={() => {onPageChange(item.key); onSidebarOpen()}} activePage={item.value} clicked={clicked} >{item.value}</SidebarItem>
                    ))
                }
            </Sidebar>
            <OpenBtn onClick={() => {onSidebarOpen()}}>&#9776;</OpenBtn>        
    </MobileHead>
)}

export default MobileHeader;