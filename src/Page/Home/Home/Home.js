import React from 'react';
import Review from '../../Review/Review';
import TopSixProduct from '../../TopSixProduct/TopSixProduct';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <TopSixProduct></TopSixProduct>
           <Review></Review>
        </div>
    );
};

export default Home;