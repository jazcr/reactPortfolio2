import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Jumbotron from '../components/Jumbotron';
import InfoSection from '../components/infoSection';
import { homeObjOne } from '../components/infoSection/Data';
const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <Jumbotron />
           <InfoSection {...homeObjOne}/> 
        </>
    );
};

export default Home;
