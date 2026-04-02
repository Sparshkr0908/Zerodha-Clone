import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Stats from './Stats';
import Education from './Education';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Award/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
     );
}

export default HomePage;