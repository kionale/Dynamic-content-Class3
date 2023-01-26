import styles from './Card.module.css'

export default function Card({
    degree = "none",
    department = "none",
    font = "0",
    image = "icon/personTwo.png"


}) {
    return (
        <div className={styles.container}>

            {
                department.toLowerCase() === "business" ? <img src={'icon/Business.jpeg'} width='100' /> :
                    department.toLowerCase() === "computing" ? <img src={'icon/Computing.png'} width='100' /> :
                        <img src={image} width='100s' />
            }

            <h2 className={styles.degree}>{degree}</h2>


        </div>
    )
}