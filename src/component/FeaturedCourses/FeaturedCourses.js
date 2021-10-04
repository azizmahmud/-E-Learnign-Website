import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';

const FeaturedCourses = () => {
    const [featuredCourses, setFeaturedCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setFeaturedCourses(data))
    }, []);
    const showFeatured = featuredCourses.slice(0, 4)
    return (
        <Container>
            <Row xs={1} md={4} className="g-4">
                {
                    showFeatured.map(course =>
                        <Course
                            course={course}
                        ></Course>

                    )
                }
            </Row>
        </Container>
    );
};

export default FeaturedCourses;