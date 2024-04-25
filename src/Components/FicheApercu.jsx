import { Link } from 'react-router-dom'

function FicheApercu({logement}) {
    const link = "/Fiche-logement/"+logement.id
 
    return (
        <div className="fiche">
            <Link to={link} >
                <img src={logement.cover} alt={logement.title}/>
                <p>{logement.title}</p>
            </Link>
        </div>
    )
  }
  
  export default FicheApercu