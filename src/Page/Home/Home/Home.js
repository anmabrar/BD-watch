import React from 'react';
import Contact from '../../Contact/Contact';
import Review from '../../Review/Review';
import TopSixProduct from '../../TopSixProduct/TopSixProduct';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopSixProduct></TopSixProduct>
           <Review></Review>
           <Contact></Contact>
        </div>
    );
};

export default Home;