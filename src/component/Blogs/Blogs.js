import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import './Blogs.css'

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogData.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <Container fluid className="p-0 m-0">
            <div className="blogs-img d-flex justify-content-center align-items-center">
                <div className="text-center text-white">
                    <h1>Our Blogs</h1>
                    <p>We’re a leading marketplace platform for learning and teaching online. Explore some of our most popular content and learn something new.</p>
                </div>
            </div>


            <Container>
                <Row xs={1} md={3} className="g-4 mt-5">
                    {
                        blogs.map(blog => <Blog
                            blog={blog}
                        ></Blog>)
                    }
                </Row>
            </Container>
        </Container>
    );
};

export default Blogs;