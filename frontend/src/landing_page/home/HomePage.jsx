import React from 'react';
import Hero from './Hero';
import Award from './Award';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';
import Stats from './Stats';
import Education from './Education';

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Stats/>
        <Award/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        </>
     );
}

export default HomePage;