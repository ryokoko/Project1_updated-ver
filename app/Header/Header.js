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
    font-weight: ${(props) => props.active?'600':'500'};
    cursor:pointer;
    &:hover {
        color: #f99f6f;
    }

    /* ${(props) => {
        console.log(props);
    }} 可以获取所有props值 */
`;



const Header = ({ activePage, onPageChange }) => {
    

    const navbarItems = [
        {key: 'HOME', value: 'Home', },
        {key: 'RESUME', value: 'Resume', },
        {key: 'SERVICES', value: 'Services', },
        {key: 'CONTACT', value: 'Contact', }
    ];

   /*  const getNavbarItemActiveClassName = (key) => {
        return (page === key && 'page--active')
    }

    const getNavbarItemClassName = (key) => {
        return (`navbarItem ${getNavbarItemActiveClassName(key)}`)
    }
 */

    return (
        <header>
                <HeaderSection>
                    <Logo />
                    <NavBar class="navbar">
                        {navbarItems.map((navbarItem) => (
                            <NavItem  key={navbarItem.key}
                                      active={activePage === navbarItem.key}
                                      className={`navbarItem ${activePage===navbarItem.key &&'page--active'}`} 
                                      href={navbarItem.value}
                                      onClick={()=> onPageChange(navbarItem.key)}>
                            {navbarItem.value}
                            </NavItem>
                        ))}
                    </NavBar>
                </HeaderSection>
        </header>
    )
    }

export default Header;