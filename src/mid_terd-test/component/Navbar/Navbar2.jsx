import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

function Navbar2() {
    return (
        <Navbar id='nav__main__two' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='nav__title__two' href="#home">FASHION<span>CUBE</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav ">
                    <Nav className="me-auto">
                        <div id='nav_two_container'> 
                            <Nav.Link className='sub1' href="#home">HOME</Nav.Link>
                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle "
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    SHOP
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item " href="#">
                                            SHOP_1
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item " href="#">
                                            SHOP_2
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item " href="#">
                                            SHOP_3
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item " href="#">
                                            SHOP_4
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Nav.Link className='sub1' href="#link">CONTACT</Nav.Link>
                        </div>
                        <div className="nav__icon">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <i class="fa-solid fa-user"></i>
                            <span className='nav__icon__item'><i class="fa-solid fa-bag-shopping"></i> </span> 
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar2;
