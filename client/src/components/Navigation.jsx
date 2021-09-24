import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import cart from '../cart-vector.png'
import pizzaLogo from '../pizza-logo-temp.jpg' 


const Navigation = () => {
    return (
        <Navbar className="d-flex flex-row justify-content-between p-2" bg="light" expand="sm" style={{ width: "inherit" }} >
            <Navbar.Brand href="/" >
                <img 
                    src={pizzaLogo} 
                    alt="p!zza logo"
                    width="44px"
                    height="44px"
                    // className="d-inline-block align-top"
                    />
            </Navbar.Brand>
            <div className="">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="align-self-end" >
                        <Nav.Link href="/">
                            <img 
                                src={cart} 
                                alt="shopping cart icon" 
                                height="40px"
                                width="40px"
                            />
                        </Nav.Link>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light">
                                <img 
                                src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
                                width="54px" 
                                height="44px" 
                                alt="hambuger icon" 
                                className="btn btn-outline-light"
                                />
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="text-danger" bg="light">
                                <Dropdown.Item href="/">Your Orders</Dropdown.Item>
                                <Dropdown.Item href="/">Popular Orders</Dropdown.Item>
                                <Dropdown.Item href="/">Preferences</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className="text-danger" href="/">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default Navigation


