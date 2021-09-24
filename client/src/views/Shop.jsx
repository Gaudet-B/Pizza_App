import PizzaModal from '../components/PizzaModal'
import Container from 'react-bootstrap/Container'
import styles from '../components/background.module.css'
import Button from 'react-bootstrap/Button'

const Shop = props => {

    const {order, setOrder} = props

    return (
        <div className={styles.shop}>
            <Container className="d-flex flex-row justify-content-evenly my-3 ps-5 pt-2" style={{ width: "100%" }}>
                {/* <Pizza /> */}
                <PizzaModal order={order} setOrder={setOrder}/>
                <Container className="d-flex flex-column" style={{ width: "40%" }}>
                    <div className="bg-light rounded p-2" style={{ height: "150px" }}>
                        <p className="fs-4">Future Content to come...</p>
                        <p>Suggestions</p>
                    </div>
                    <div className=" my-4 bg-light rounded" style={{ height: "100px" }}>
                        <Button href="/checkout" variant="link-dark">
                            Checkout
                        </Button>
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Shop
