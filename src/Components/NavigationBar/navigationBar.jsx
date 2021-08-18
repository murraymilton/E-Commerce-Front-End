import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = ({ currentUser, logout }) => {
    return (  
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className="me-end">Authentic Fit</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="mr-end my-2 my-lg-0" navbarScroll>
                        {currentUser &&
                            <>
                                <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> 
                                <Nav.Link as={Link} onClick={() => logout()}>Logout</Nav.Link>
                            </>
                        }
                        {!currentUser &&
                            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                        }
                        {!currentUser &&
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        {!currentUser &&
                            <Nav.Link as={Link} to="/products">Hub</Nav.Link>
                        }
                        {!currentUser && 
                            <Nav.Link as={Link} to="/shoppingcart">Cart</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>    
        </>
    );
}
 
export default NavigationBar;

// <Nav.Link as={Link} to="/">Home</Nav.Link> 