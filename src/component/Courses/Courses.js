import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';



const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <Container>
            <Row xs={1} md={4} className="g-4 mt-5 pt-5">
                {
                    courses.map(course =>
                        <Course
                            course={course}
                        ></Course>

                    )
                }
            </Row>
        </Container>
    );
};

export default Courses;