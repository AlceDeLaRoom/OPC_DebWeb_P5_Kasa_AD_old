import "../styles/FicheApercu.css"
import { Link } from 'react-router-dom'

function FicheApercu({number}) {
    const link = "/Fiche-logement/"+number

    return (
        <div className="fiche">
            <Link to={link} >Lien du logement {number}</Link>
        </div>
    )
  }
  
  export default FicheApercu