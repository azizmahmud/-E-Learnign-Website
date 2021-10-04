import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notfound-bg d-flex justify-content-center align-items-center">
            <Link to="/home">
                <Button variant="warning" className="btn-lg">Go Back To Home</Button>
            </Link>
        </div>
    );
};

export default NotFound;