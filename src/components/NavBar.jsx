import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = (props) => (
    <Navbar inverse collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                <span>{props.title}</span>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <LinkContainer to="/">
                    <NavItem eventkey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem eventkey={2}>About</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <LinkContainer to="/register">
                    <NavItem eventkey={1}>Register</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                    <NavItem eventKey={2}>Log in </NavItem>
                </LinkContainer>
                <LinkContainer to="/logout">
                    <NavItem eventkey={3}>Log out</NavItem>
                </LinkContainer>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)
export default NavBar