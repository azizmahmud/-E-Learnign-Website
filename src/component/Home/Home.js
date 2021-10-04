import React from 'react';
import FeaturedCourses from '../FeaturedCourses/FeaturedCourses';
import Hero from '../Hero/Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div>
                <h2 className="text-center my-5 fw-bold">Featured Courses</h2>
                <FeaturedCourses></FeaturedCourses>
            </div>
        </div>
    );
};

export default Home;