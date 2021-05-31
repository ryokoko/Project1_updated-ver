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
    width: ${(props) => props.clicked? '30px':'0px'}; 
    position: fixed;
    z-index: 20;
    top: 0;
    right: ${(props) => props.clicked ? '50px':'0px'};
    background-color: #fdd371;
    color: #524c49;
    /* overflow-x: hidden; */
    padding-top: 60px;
    transition:  ${(props) => props.clicked ? '0.5s': '1s'}; 
    /* visibility: ${((state) => state.sidebar ? 'visible' : 'hidden')}; */
    transform: ${(props) => props.clicked ? '50px': '0px'}; 
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
const CloseBtn = styled(SidebarItem)`
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
const MobileHeader = ({onSidebarOpen, clicked}) => {

    const navBarItems = [
        {key: 'HOME', value: 'Home',},
        {key: 'RESUME', value: 'Resume',},
        {key: 'SERVICES', value: 'Services',},
        {key: 'CONTACT', value: 'Contact',},
    ];

  
    return (
    <MobileHead>
            <MobileLogo>Rebecca <Highlight>Li</Highlight></MobileLogo>
            <Sidebar clicked={clicked} id="sidebar">
                <CloseBtn href='javascript:void(0)' id='btn--close'>&times;</CloseBtn>
                {
                    navBarItems.map((item) => (
                        <SidebarItem>{item.value}</SidebarItem>
                    ))
                }
            </Sidebar>
            <OpenBtn onClick={() => {onSidebarOpen()}}>&#9776;</OpenBtn>        
    </MobileHead>
)}

export default MobileHeader;