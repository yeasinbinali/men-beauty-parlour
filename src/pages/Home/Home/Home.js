import React from 'react';
import Banner from '../Banner/Banner';
import HomeAbout from '../HomeAbout/HomeAbout';
import HomeForm from '../HomeForm/HomeForm';
import HomeServices from '../HomeService/HomeService';
import Purposes from '../Purposes/Purposes';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <Purposes></Purposes>
            <HomeAbout></HomeAbout>
            <Testimonials></Testimonials>
            <HomeForm></HomeForm>
        </div>
    );
};

export default Home;