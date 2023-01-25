import styles from './CardTwo.module.css'

export default function CardTwo({
    position = "none",
    colour = "pink",
    font = "0",
    image="icon/personTwo.png"


}) {
    return (
        
        <div style={{ backgroundColor: colour, fontSize: font }}>
        {
            colour ==="orange" ?  <img src={'icon/person.png'} width='50' />:
            colour ==="light-blue" ? <img src={'icon/personThree.png'} width='50' /> :
            <img src ={image} width ='50' />        
        }
            {/* if color == rd do img. : meaning else if is blue, imgTHree, otherwise defalut */}
            <h2 className={styles.position }>{position}</h2>
            
            </div>
    )
}