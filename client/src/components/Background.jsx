import BackgroundSlice from './BackgroundSlice'
import BackgroundPie from './BackgroundPie'
import styles from '../components/background.module.css'
// import pieImg from './pizza-pie-vector.png'
// import sliceImg from './pizza-slice-vector.png'


const Background = props => {

    const {images, slice, pie} = props

    const imageGenerator = () => {
        for (let i = 0; i < 6; i++) {
            images.push(styles.slice)
            images.push(styles.pie)
        }
        // console.log(images)
        return(
            images.map((image, idx) => {
                return(
                    (idx % 2 === 0) ?
                        <div key={idx} id={image} className={styles.slice} ></div>
                        :
                        <div key={idx} id={image} className={styles.pie} ></div>
                )
            })
        )
    }

    return (
        <div className={styles.wrapper}>
            {
            (images.length > 0) ?
                images.map((image, idx) => {
                    return(
                        (idx % 2 === 0) ?
                        <div key={idx} id={image} className={styles.slice} ></div>
                        :
                        <div key={idx} id={image} className={styles.pie} ></div>
                    )
                })
                :
                imageGenerator()
            }
        </div>
    )
}

export default Background
