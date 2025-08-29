import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink to="/" className='navbar-brand'><span onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                        });
                    }}>Dynamic Pricing User App</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className='nav-link'>Catalog Sản phẩm</NavLink>
                            <NavLink to="/esl" className='nav-link'>Quản lý ESL</NavLink>
                            <NavLink to="/analytics" className='nav-link'>Phân tích</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;