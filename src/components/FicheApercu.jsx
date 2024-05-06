import { Link } from 'react-router-dom'

function FicheApercu({logement}) {
    const link = "/Fiche-logement/"+logement.id
 
    return (
        <div className="ficheApercu">
            <Link to={link} >
                <img src={logement.cover} alt={logement.title}/>
                <div className='ficheApercu__mask'></div>
                <p>{logement.title}</p>
            </Link>
        </div>
    )
}

export default FicheApercu