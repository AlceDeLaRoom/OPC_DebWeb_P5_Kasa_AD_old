import { useState } from "react"

function Carrousel({pictures}){
    console.log(pictures)
    const [pictureId,changePicture] = useState(0)
    const nav = (pictures.length > 1)
    const prevPicture = <div onClick={changePicture(pictureId-1)}>Previous</div>
    const nextPicture = <div onClick={changePicture(pictureId+1)}>Next</div>

    return(
        <div>
            {nav && prevPicture}
            <img src={pictures[pictureId]}/>
            {nav && nextPicture}
        </div>
    )
}

export default Carrousel