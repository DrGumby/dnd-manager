import React, { Component } from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>D&amp;D Manager</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/game">Game</Nav.Link>
                <Nav.Link as={NavLink} to="/players">Players</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
