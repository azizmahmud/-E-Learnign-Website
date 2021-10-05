import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
    return (
            <Carousel fade>
                <Carousel.Item className="carousel-item">
                    <Carousel.Caption>
                        <h1 className="fw-bold">Learn From Anywhere</h1>
                        <p className="w-75 m-auto">Take classes on the go with the E-learnign app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                        <Link to="/courses" className="btn btn-md btn-warning mt-3">See All Courses</Link>
                    </Carousel.Caption>
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/MB7Xf9P/header1.png"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/g4snrfZ/header2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fw-bold">Learn From Anywhere</h1>
                        <p className="w-75 m-auto">Take classes on the go with the E-learnign app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                        <Link to="/courses" className="btn btn-md btn-warning mt-3">See All Courses</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block img-fluid"
                        src="https://i.ibb.co/ZHj3Xm8/header3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fw-bold">Learn From Anywhere</h1>
                        <p className="w-75 m-auto">Take classes on the go with the E-learnign app. Stream or download to watch on the plane, the subway, or wherever you learn best.</p>
                        <Link to="/courses" className="btn btn-md btn-warning mt-3">See All Courses</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default Hero;