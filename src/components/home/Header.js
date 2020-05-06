import React from 'react'
import Hero from '../globals/Hero';
import homeImg from '../../images/homeBcg.jpeg';
import Banner from '../globals/Banner';

const Header = () => {
    return (
        <Hero img={homeImg}>
            <Banner 
            greeting="welcome to" 
            title="beachwalk resort" 
            text = "Pariatur voluptate proident ad non proident eu adipisicing. Ea anim proident nostrud magna ex sit et. "/>
            
        </Hero>
    )
};

export default Header;
