import styles from './Card.module.css'

export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"


}) {
    return (
        
        <div className={ `${styles.Card}`} style={{ backgroundColor: colour, fontSize: font}}>{
            colour === "light-blue" ?  <img src={'icon/person.png'} width='50' />:
            colour === "orange" ? <img src={'icon/personThree.png'} width='50' /> :
            <img src ={image} width ='50' />        
        }
        
            <h2 className={styles.degree}>{degree}</h2>
            
        </div>
    )
}