import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

class BarraNavegacao extends Component {
    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">

                    <Navbar.Brand href="#home">SpringAPP</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/usuarios">Carros</Nav.Link>

                    </Nav>

                </Navbar>


            </header>
        );
    }
}

export default BarraNavegacao;