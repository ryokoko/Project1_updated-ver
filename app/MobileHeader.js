import React from 'react';

const MobileHeader = () => (
    <div class="header__mobile">
            <div class="header__name">Rebecca <span>Li</span>
            </div>
            <div id="sidebar">
                <a href='javascript:void(0)' id='btn--close'>&times;</a>
                <a class="tab tab__home">Home</a>
                <a class="tab tab__resume">Resume</a>
                <a class="tab tab__services">Services</a>
                <a class="tab tab__contact">Contact</a>
            </div>
            <div id="btn--open">&#9776;</div>        
    </div>
)

export default MobileHeader;