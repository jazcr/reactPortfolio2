import React from 'react'
import Resume from '../../images/Resume.pdf';
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
                    <SidebarLink to="currentProj" onClick={toggle}>Currently..</SidebarLink>
                    <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle} >Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href={Resume} target='_blank' rel='noopener noreferrer'>View Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarCon>
    )
}

// <a href='/api/v1/print/example.pdf' target='_blank' rel='noopener noreferrer'>
export default Sidebar;
