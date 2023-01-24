
export default function Card({
    degree = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"


}) {
    return (
        
        <div style={{ backgroundColor: colour, fontSize: font }}>{
            colour === "light-blue" ?  <img src={'icon/person.png'} width='50' />:
            colour === "orange" ? <img src={'icon/personThree.png'} width='50' /> :
            <img src ={image} width ='50' />        
        }
            {/* if color == rd do img. : meaning else if is blue, imgTHree, otherwise defalut */}
            {degree}
            
        </div>
    )
}