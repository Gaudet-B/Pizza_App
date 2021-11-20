import PizzaModal from '../components/PizzaModal'
import Container from 'react-bootstrap/Container'
import styles from '../components/background.module.css'
import Button from 'react-bootstrap/Button'

const Shop = props => {

    const {order, setOrder} = props

    return (
        <div className={styles.shop}>
            <Container className="d-flex flex-row justify-content-between my-3" style={{ width: "inherit", padding: "0px" }}>
                {/* <Pizza /> */}
                <PizzaModal order={order} setOrder={setOrder}/>
                <Container className="d-flex flex-column flex-1" style={{ width: "40%", margin: "0px", padding: "0px" }} >
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
