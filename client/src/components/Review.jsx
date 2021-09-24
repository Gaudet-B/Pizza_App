import styles from './background.module.css'
import pizzaLogo from '../pizza-logo-temp.jpg'


const Review = props => {

    const {order, setOrder} = props

    return (
        <div className="d-flex flex-column text-center text-light rounded p-2" style={{ backgroundColor: "rgba(143, 3, 3, 0.774)" }} >
            <div className={styles.modalImage} >
                <img 
                    src={pizzaLogo} 
                    alt="p!zza logo"
                    height="280px"
                    width="80%"
                    className="rounded"
                />
            </div>
            <div className="d-flex flex-row justify-content-evenly my-2">
                <div className="d-flex flex-column text-center border border-light rounded" style={{ height: "70px", width: "40%" }}>
                    <h3>Crust:</h3>
                    <p>{order.crust}</p>
                </div>
                <div className="d-flex flex-column text-center border border-light rounded" style={{ height: "70px", width: "40%" }}>
                    <h3>Sauce:</h3>
                    <p>{order.sauce}</p>
                </div>
            </div>
            <div className="d-flex flex-column border border-light rounded mx-2 mb-2">
                <h3>Toppings:</h3>
                <div className="d-flex flex-row justify-content-evenly my-2">
                    <div className="d-flex flex-column text-start">
                        <p className="fw-bold">Cheese:</p>
                        <ul>
                            {
                                order.toppings.cheese.map((cheese, idx) => {
                                    return(
                                        <li key={idx}>{cheese}</li>
                                    )
                                })
                            
                            }
                        </ul>
                    </div>
                    <div className="d-flex flex-column text-start">
                        <p className="fw-bold">Meat:</p>
                        <ul>
                            {
                                order.toppings.meat.map((meat, idx) => {
                                    return(
                                        <li key={idx}>{meat}</li>
                                    )
                                })
                            
                            }
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column text-center">
                    <p className="fw-bold">Other:</p>
                    <ul className="d-flex flex-row justify-content-evenly" style={{ width: "fit-content" }}>
                        <div className="d-flex flex-column text-start" >
                            {
                                order.toppings.other.slice(0, Math.floor(order.toppings.other.length/2)).map((other, idx) => {
                                    return(
                                        <li key={idx}>{other}</li>
                                    )
                                })
                            
                            }
                        </div>
                        <div className="d-flex flex-column text-start" >
                            {
                                order.toppings.other.slice(Math.floor(order.toppings.other.length/2)).map((other, idx) => {
                                    return(
                                        <li key={idx}>{other}</li>
                                    )
                                })
                            
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Review
