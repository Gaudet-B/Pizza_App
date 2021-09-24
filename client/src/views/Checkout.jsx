import styles from '../components/background.module.css'

const Checkout = props => {

    const {order} = props

    return (
        <div className={styles.shop} >
            <div className="bg-light rounded m-5 text-center text-secondary py-3" style={{ width: "80%", height: "fit-content" }}>
                <h3 className="display-5">Payment page is under construction...</h3>
                <div className="d-flex flex-column text-start my-3 mx-5">
                    <h3>Your Order Details:</h3>
                    <div className="d-flex flex-row">
                        <p className="me-2 fw-bold">Crust:</p>
                        <p>{ order.crust }</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p className="me-2 fw-bold">Sauce:</p>
                        <p>{ order.sauce }</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p className="me-2 fw-bold">Cheese:</p>
                        <p>{ order.toppings.cheese }</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p className="me-2 fw-bold">Meat:</p>
                        <p>{ order.toppings.meat }</p>
                    </div>
                    <div className="d-flex flex-row">
                        <p className="me-2 fw-bold">Other Toppings:</p>
                        <p>{ order.toppings.other }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
