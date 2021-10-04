import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Blog = (props) => {
    console.log(props)
    const { titel, picture, description } = props.blog


    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{titel}</Card.Title>
                    <Card.Text>{description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Blog;