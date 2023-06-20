import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
function Navbar1() {
    return (
        <Navbar id='nav__main__one' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand className='nav__title' href="#home">FREE SHIPPING ON ALL ORDERS OVER $50</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div id='nav_one_container'> 

                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    USD
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            CAD
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            AUD
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            EUR
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            GBP
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    English
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            French
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Italian
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            German
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Spanish
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="dropdown">
                                <button
                                    className="btn btn-primary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    My Account
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Sing In
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Register
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbar1;