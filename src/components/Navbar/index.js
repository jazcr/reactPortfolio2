import React from 'react';
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarCon, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavbarComps';

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarCon>
                    <NavLogo to='/'>j a z</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="currentProj">Current Project</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="projects">All Projects</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to="/"></NavBtnLink>
                    </NavBtn> */}
                </NavbarCon>
            </Nav>
        </>
    );
};

export default Navbar;
