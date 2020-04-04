import React, { Component } from 'react';

import { Nav, Navbar, Link } from 'react-bootstrap';

export class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>D&amp;D Manager</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link>Game</Nav.Link>
                <Nav.Link>Players</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Header
