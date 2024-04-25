import arrowDown from "../assets/Arrow_down.png"
import arrowUp from "../assets/Arrow_up.png"
import { useState } from "react"

function FicheInfo({title, content}) {

    function handleClick() {
        console.log(open)
        open? setOpen(false) : setOpen(true);
    }

    const [open, setOpen] = useState(false)

    return (
      <div className="title-info">
        <h2>{title}</h2>
        <img src={open? arrowDown : arrowUp} onClick={handleClick} alt="flèche pour afficher ou cacher les infos"/>
        {open && (
            <div>
                <p>{content}</p>
            </div>
        )}
      </div>
    )
  }
  
  export default FicheInfo