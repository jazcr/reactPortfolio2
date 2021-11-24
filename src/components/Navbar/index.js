import React from 'react'
import { Nav, NavbarCon, NavLogo } from './NavbarComps';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarCon>
                    <NavLogo to='/'>Jaz</NavLogo>
                </NavbarCon>
            </Nav>
        </>
    );
};

export default Navbar;
