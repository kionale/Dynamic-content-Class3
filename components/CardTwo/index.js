import styles from './CardTwo.module.css'

export default function CardTwo({
    position = "none",
    colour = "pink",
    font = "0",
    image = "icon/personTwo.png"


}) {
    return (

        <div style={{ backgroundColor: colour, fontSize: font }}>
            {
                position === "Frontend Developer" ? <img src={'icon/frontend_developer.jpeg'} width='200' /> :
                    position === "UI Designer" ? <img src={'icon/Ui_designer.jpeg'} width='200' /> :
                        position === "UX Researcher" ? <img src={'icon/UX_designer.jpg'} width='200' /> :
                            position === "Product manager" ? <img src={'icon/Product_manager.jpeg'} width='200' /> :
                                position === "Backend Developer" ? <img src={'icon/Backend_developer.jpeg'} width='200' /> :

                                    <img src={image} width='50' />
            }

            <h2 className={styles.position}>{position}</h2>

        </div>
    )
}