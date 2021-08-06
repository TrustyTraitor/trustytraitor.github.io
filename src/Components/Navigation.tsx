import {Nav, Navbar, NavDropdown, Container, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import GithubIcon from '../assets/github.png'

function Navigation()
{
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="primary" sticky="top">
            <Container fluid>
                <Navbar.Toggle/>
                <Link to="/" className="navbar-brand">Michael Gain</Link>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="mr-left">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <NavDropdown title="Contact" id="collapsible-nav-dropdown">
                            <NavDropdown.Item rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/michael-gain-36212b184/"> LinkedIn </NavDropdown.Item>
                            <NavDropdown.Item rel="noreferrer" target="_blank" href="mailto:gainmikey@gmail.com"> E-mail </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink href="https://github.com/Dovahkid" target="_blank"><img alt="github" src={GithubIcon} className="navbarImages"/></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            
        </Navbar>
    )
}

export default Navigation;