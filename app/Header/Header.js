import React from 'react';
import styled from 'styled-components';

/* import './Header.css'; */
import Logo from './components/NormalLogo';
import Flex from '../../components/Flex';

/* 
 * 如果是多个components在同一个页面中需要import的话
 * import all from './Components';
 * const {Header, Footer} = all;
 * 花括号以外的import永远指向default export

*/
/* Using styled-components */
/* SC划分标准：按责任划分，或者按复用划分 */
const HeaderSection = styled.div`
      height: 80px;
      width: 100%;
      background-color: #fdd371;

      @media (max-width: 768px) {
          display: none;
      }
`;

const NavBar = styled(Flex)`
    float: right;
    flex-direction: row;
    justify-content: flex-end;
    line-height: 80px;
`;

const NavItem = styled.div`
    color: #524c49;
    padding-right: 10%;
    font-size: 2rem;
`;

const NavLink = styled.a`
    color: #524c49;
    &:hover {
        color: #f99f6f;
    }
`;



const Header = () => (
    <header>
            <HeaderSection>
                <Logo />
                <div class="header__nav">
                    <NavBar class="navbar">
                        <NavItem><NavLink class="tab__home">Home</NavLink></NavItem>
                        <NavItem><NavLink class="tab__resume">Resume</NavLink></NavItem>
                        <NavItem><NavLink class="tab__services">Services</NavLink></NavItem>
                        <NavItem><NavLink class="tab__contact">Contact</NavLink></NavItem>
                    </NavBar>
                </div>
            </HeaderSection>
    </header>
)

export default Header;