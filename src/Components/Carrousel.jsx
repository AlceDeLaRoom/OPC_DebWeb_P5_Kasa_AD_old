import { useState } from "react"

function Carrousel({pictures}){
    const [pictureId,changePicture] = useState(0)
    const nav = (pictures.length > 1)
    const prevPicture = <div onClick={()=>changePicture(pictureId!=0?pictureId-1:pictures.length-1)}>Previous</div>
    const nextPicture = <div onClick={()=>changePicture(pictureId<pictures.length-1?pictureId+1:0)}>Next</div>

    return(
        <div>
            {nav && prevPicture}
            <img src={pictures[pictureId]}/>
            {nav && nextPicture}
        </div>
    )
}

export default Carrousel