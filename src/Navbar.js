import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, NavDropdown, Nav,Container} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navbar1 = () => {
    return(
        <div>
            <Navbar bg="secondary" expand="lg">
                <Container>
                    <Navbar.Brand>My Profile</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="nav-link">
                            <Nav.Link href="/Home" >Home</Nav.Link>
                            <Nav.Link href="/Gallery">Gallery</Nav.Link>
                            <Nav.Link href="/Contact">Contact</Nav.Link>
                            <NavDropdown title="About Me" id="basic-nav-dropdown">
                                <NavDropdown.Item >Profile</NavDropdown.Item>
                                <NavDropdown.Item >Education</NavDropdown.Item>
                                <NavDropdown.Item >Blog</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item>My Quote</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}
export default Navbar1;