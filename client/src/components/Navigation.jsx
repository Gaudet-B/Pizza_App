import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import cart from '../cart-vector.png'
import pizzaLogo from '../pizza-logo-temp.jpg'
import styles from './background.module.css'


const Navigation = () => {
    return (
        <Navbar className="d-flex flex-row justify-content-between p-0 border rounded" bg="light" style={{ width: "inherit", maxHeight: "62px", marginTop: "5px" }} >
            <Navbar.Brand href="/" className="p-0" >
                <img 
                    src={pizzaLogo} 
                    alt="pizza logo"
                    width="50px"
                    height="50px"
                    style={{ margin: "6px" }}
                    // className="d-inline-block align-top"
                    />
            </Navbar.Brand>
            <div className={styles.title}>
                <p style={{ margin: "0px", fontSize: "30px" }} >P ! Z Z A</p>
            </div>
            <div className="p-0">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="align-self-end" >
                        <Nav.Link href="/" style={{ padding: "0px" }} >
                            <img 
                                src={cart} 
                                alt="shopping cart icon" 
                                height="35px"
                                width="35px"
                                style={{ marginTop: "10px" }}
                            />
                        </Nav.Link>
                        <Dropdown align="end">
                            <Dropdown.Toggle variant="light">
                                <img 
                                src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" 
                                width="44px" 
                                height="38px" 
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


