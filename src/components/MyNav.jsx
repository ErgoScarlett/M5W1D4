import { React, useContext } from 'react'
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { ThemeContext } from './ThemeContextProvider';


//function MyNav() {
  const MyNav = ({search, setSearch}) => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <Navbar bg={theme} data-bs-theme={theme} style={{marginBottom: '20px'}}>
          <Container>
            <Navbar.Brand>EpicBooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Browse</Nav.Link>
              </Nav>
              <Button variant="outline-info" onClick={() => toggleTheme()}>Change</Button>
            </Navbar.Collapse>
          </Container>
          <Form className="d-flex">
          <FormControl type="search" placeholder="Cerca il tuo libro"
            className="me-2" aria-label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}/>
          </Form>
        </Navbar>
        
      );
}

export default MyNav