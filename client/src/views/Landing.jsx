import Container from 'react-bootstrap/esm/Container'
import { Link } from 'react-router-dom'
import styles from '../components/background.module.css'
import Login from '../components/Login'
import RegisterModal from '../components/RegisterModal'

const Landing = () => {

    const text = `Continue as guest >`

    return (
        <div className={styles.shop}>
            <div className="d-flex flex-column me-3 bg-light rounded" style={{ width: "63%" }}>
                <Login className="flex-2" />
                <RegisterModal />
            </div>
            <div className="d-flex flex-column bg-light rounded ms-4 p-3 justify-content-evenly" style={{ width: "34%" }}>
                <Link className="link-danger text-decoration-none" to="/shop">
                    <p className="fw-bold">{text}</p>
                </Link>
            </div>
        </div>
    )
}

export default Landing