import arrowUp from "../assets/Arrow_up.png"
import { useState } from "react"

function FicheInfo({content, list = false}) {

    const [title, description] = content
    function layout (){
        if (list){
            return(
                <ul>
                    {description.map((elem)=>(<li>{elem}</li>))}
                </ul>
            )
        }
        return (
            <p>{description}</p>
        )
    }

    function handleClick() {
        open? setOpen(false) : setOpen(true);
    }

    const [open, setOpen] = useState(false)

    const classContent = "ficheInfo__content" + (open ? " open": '')

    return (
        <div className="ficheInfo">
            <div className="ficheInfo__title" onClick={handleClick}>
                <p>{title}</p>
                <img src={arrowUp} alt="flèche pour afficher ou cacher les infos"
                style={{transform: open ? 'rotate(-180deg)' : 'rotate(0deg)'}}
                />
            </div>
                <div className={classContent}>
                    {layout()}
                </div>
        </div>
    )
}
  
export default FicheInfo