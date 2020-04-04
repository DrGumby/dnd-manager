import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export function Header(props) {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ marginBottom:5 }}>
            <Navbar.Brand href="#home">D&amp;D Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/game">Game</Nav.Link>
                <Nav.Link as={NavLink} to="/players">Players</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
    );
}