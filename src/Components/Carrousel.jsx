import { useState } from "react"
import previousArrow from '../assets/previous_arrow.png'
import nextArrow from '../assets/next_arrow.png'


function Carrousel({pictures}){
    const [pictureId,changePicture] = useState(0)
    const nav = (pictures.length > 1)
    const prevPicture = <img src={previousArrow} onClick={()=>changePicture(pictureId!=0?pictureId-1:pictures.length-1)} alt="Image précédente"/>
    const nextPicture = <img src={nextArrow} onClick={()=>changePicture(pictureId<pictures.length-1?pictureId+1:0)} alt="Image suivante"/>

    return(
        <div>
            {nav && prevPicture}
            <img src={pictures[pictureId]}/>
            {nav && nextPicture}
        </div>
    )
}

export default Carrousel