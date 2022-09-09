import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import Feature from '../Feature';


function Home() {
    return (
        <>
            <HeroSection />
            <Feature />
            <Cards />
            <Footer />
        </>
    );
}

export default Home;
