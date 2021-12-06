import React from 'react'
import { 
    SidebarCon, 
    Icon, 
    CloseIcon,
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute } from './SidebarComps';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarCon isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="skills" onClick={toggle}>Skills</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="contact" >Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/resume">View Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarCon>
    )
}

export default Sidebar;
