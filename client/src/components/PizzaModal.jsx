import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Modal from 'react-bootstrap/Modal'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { useHistory } from 'react-router-dom'
import pizzaLogo from '../pizza-logo-temp.jpg'
import Crust from './Crust'
import Review from './Review'
import Sauce from './Sauce'
import Toppings from './Toppings'


const PizzaModal = props => {

    const {order, setOrder} = props

    const [show, setShow] = useState(false)
    const [step, setStep] = useState(1)
    const history = useHistory()

    // const [order, setOrder] = useState({
    //     crust: "",
    //     sauce: "",
    //     toppings: {
    //         cheese: [],
    //         meat: [],
    //         other: []
    //     }
    // })

    const handleClose = () => {
        setStep(1)
        setShow(false)
    }

    const handleShow = () => setShow(true)

    const handleNext = () => {
        setStep(step + 1)
    }

    const handleBack = () => {
        setStep(step - 1)
    }

    const handleSubmit = () => {
        history.replace("/checkout")
    }

    return (
        <div className="d-flex flex-column text-center align-items-center bg-light border rounded p-3" style={{ height: "fit-content", width: "55%", minWidth: "fit-content" }}>
            <img className="rounded my-2"
                src={pizzaLogo} 
                alt="p!zza logo" 
                height="200px"
                width="200px"
            />
            <Button variant="danger" onClick={handleShow}>
                Get Started
            </Button>
            <Modal show={show} onHide={handleClose}>
                {
                    (step <= 0) ?
                    handleClose()
                    :
                    (step > 4) ?
                    handleClose()
                    :
                    (step === 1) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 1 - Choose Crust</Modal.Title>
                                <ProgressBar variant="danger" animated now={25} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Crust order={order} setOrder={setOrder}/>
                        </Modal.Body>
                    </Container>
                    :
                    (step === 2) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 2 - Choose Sauce</Modal.Title>
                                <ProgressBar variant="danger" animated now={50} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Sauce order={order} setOrder={setOrder} />
                        </Modal.Body>
                    </Container>
                    :
                    (step === 3) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 3 - Choose Toppings</Modal.Title>
                                <ProgressBar variant="danger" animated now={75} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Toppings order={order} setOrder={setOrder} />
                        </Modal.Body>
                    </Container>
                    :
                    (step === 4) ?
                    <Container>
                        <Modal.Header closeButton>
                            <Container >
                                <Modal.Title>Step 4 - Review Pizza</Modal.Title>
                                <ProgressBar variant="danger" animated now={100} className="my-2" />
                            </Container>
                        </Modal.Header>
                        <Modal.Body>
                            <Review order={order} setOrder={setOrder} />
                        </Modal.Body>
                    </Container>
                    :
                        <p>Loading...</p>
                    }
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleBack}>
                        Back
                    </Button>
                    {
                        (step === 4) ?
                        <Button variant="danger" onClick={handleSubmit}>
                            Checkout
                        </Button>
                        :
                        <Button variant="outline-danger" onClick={handleNext}>
                            Continue
                        </Button>
                    }
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default PizzaModal