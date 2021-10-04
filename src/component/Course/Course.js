import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Course = (props) => {
    const { name, picture, price, instructor, language, student } = props.course;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <p><b>Instructor: </b>{instructor}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><b>Total Students: </b>{student}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><b>Language: </b>{language}</p>
                    </Card.Text>
                    <Card.Text>
                        <p><b>Price: </b>{price}$</p>
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="bg-white border-0 pb-3">
                    <Button variant="primary">Enroll Now</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;