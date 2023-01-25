import styles from './Card.module.css'

export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"


}) {
    return (
        <div className={styles.container}>
            <div style={{ backgroundColor: colour }}>
                {
                    colour === "DarkSalmon" ? <img src={'icon/Business.jpeg'} width='100' /> :
                        colour === "MediumSlateBlue" ? <img src={'icon/Computing.png'} width='100' /> :
                            <img src={image} width='100s' />
                }

                <h2 className={styles.degree}>{degree}</h2>

            </div>
        </div>
    )
}