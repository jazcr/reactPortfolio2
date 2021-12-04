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

const Sidebar = () => {
    return (
        <SidebarCon>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about">About</SidebarLink>
                    <SidebarLink to="skills">Skills</SidebarLink>
                    <SidebarLink to="projects">Projects</SidebarLink>
                    <SidebarLink to="contact">Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/resume">View Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarCon>
    )
}

export default Sidebar;
