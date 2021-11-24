import React from 'react';
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarCon, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks } from './NavbarComps';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarCon>
                    <NavLogo to='/'>Jaz</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarCon>
            </Nav>
        </>
    );
};

export default Navbar;
