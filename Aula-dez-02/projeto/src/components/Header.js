import React from 'react'

import ButtonMob from './header/ButtonMob'
import Nav from './header/Nav'
import Logo from './header/Logo'

const Header = () => {
    return (
        <div className="header">
            <Nav />
            <ButtonMob />
            <Logo />
        </div> 
    );
}

export default Header