import logo from '../../logo1.png';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" fixed="top" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink exact to="/" ClassName="fw-bold">
                        <img className="logo" src={logo} alt="" />
                    </NavLink>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <NavLink to="/home" className="nav-menu-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-menu-link">
                        About
                    </NavLink>
                    <NavLink to="/courses" className="nav-menu-link">
                        Courses
                    </NavLink>
                    <NavLink to="/blogs" className="nav-menu-link">
                        Blogs
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;