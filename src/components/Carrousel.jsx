import { useState } from "react"
import previousArrow from '../assets/previous_arrow.png'
import nextArrow from '../assets/next_arrow.png'


function Carrousel({pictures}){
    const [pictureId,changePicture] = useState(0)
    const nav = (pictures.length > 1)
    const navPicture = <div className="carrousel__nav">
            <img className="carrousel__prev" src={previousArrow} onClick={()=>changePicture(pictureId!==0?pictureId-1:pictures.length-1)} alt="bouton précédent"/>
            <p>{pictureId+1}/{pictures.length}</p>
            <img className="carrousel__next" src={nextArrow} onClick={()=>changePicture(pictureId<pictures.length-1?pictureId+1:0)} alt="bouton suivant"/>
        </div>

    return(
        <div className="carrousel">
            <img className="carrousel__img" src={pictures[pictureId]} alt="chambre ou appartement à louer"/>
            {nav && navPicture}
        </div>
    )
};

export default Carrousel