import React from 'react';

import './Header.css';

/* 
 * 如果是多个components在同一个页面中需要import的话
 * import all from './Components';
 * const {Header, Footer} = all;
 * 花括号以外的import永远指向default export

*/
const Header = () => (
    <header>
            <div class="header__section">
                <div class="header__name">Rebecca <span>Li</span>
                </div>
                <div class="header__nav">
                    <ul class="navbar">
                        <li><a class="tab__home">Home</a></li>
                        <li><a class="tab__resume">Resume</a></li>
                        <li><a class="tab__services">Services</a></li>
                        <li><a class="tab__contact">Contact</a></li>
                    </ul>
                </div>
            </div>
    </header>
)

export default Header;