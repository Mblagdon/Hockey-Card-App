import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false); // State to manage mobile navbar toggle
  const collections = [
    'MVP', 'O-Pee-Chee', 'O-Pee-Chee Platinum', 'Series 1',
    'Series 2', 'Artifacts', 'Black Diamond', 'Parkhurst',
    'Trilogy', 'Synergy', 'SP Game Used', 'SPX', 'Ice', 'SP Authentic',
    'Premier'
  ];

  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)} style={{ color: 'black' }}>Hockey Card Collection</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded => !expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/add-card" onClick={() => setExpanded(false)}>
              Add Card
            </Nav.Link>
            <NavDropdown title="Collection" id="basic-nav-dropdown" onClick={(e) => e.preventDefault()}>
              <NavDropdown.Item as={Link} to="/collection" onClick={() => setExpanded(false)}>
                All Collections
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {collections.map((collection, index) => (
                <NavDropdown.Item key={index} as={Link} to={`/collection/${collection.replace(/\s+/g, '-').toLowerCase()}`} onClick={() => setExpanded(false)}>
                  {collection}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;


