import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
        <div className="">
            <div className="hero-img d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                    <h1 className="fw-bold">Learn From Anywhere</h1>
                    <p className="w-75 m-auto">Take classes on the go with the E-learnign app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                    <Link to="/courses" className="btn btn-md btn-warning mt-3">See All Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;