export default function CardTwo({
    name = "none",
    position = "none",
    gender = "Female",
    team = 1


}) {
    return (
        
        <div style={{ backgroundColor: colour, fontSize: font }}>{
            team === 1 ?  <img src={'icon/person.png'} width='50' />:
            team === 2 ? <img src={'icon/personThree.png'} width='50' /> :
            <img src ={image} width ='50' />        
        }
            {/* if color == rd do img. : meaning else if is blue, imgTHree, otherwise defalut */}
            {position}
            
        </div>
    )
}