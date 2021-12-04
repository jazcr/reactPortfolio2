import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';



export const SidebarCon = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #000;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
top: 0;
`
// opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};


export const CloseIcon = styled(FaTimes)`
color: #fff;
`

export const Icon = styled.div`
postition: absolute;
top: 1.2 rem;
right: 1.5 rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

`

export const SidebarWrapper = styled.div`
    color: #fff;

`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(5, 60px);
    }

`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #e4a6f7;
        transition: 0.2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
`
export const SidebarRoute = styled(LinkRouter)`
    border-radius: 50px;
    background: #e4a6f7;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`