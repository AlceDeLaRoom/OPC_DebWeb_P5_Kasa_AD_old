import { useParams } from 'react-router-dom'
import FicheInfo from '../components/FicheInfo'
import Carrousel from '../components/Carrousel'
import Tags from '../components/Tags'
import Rating from '../components/Rating'
import Error404 from '../pages/Error404'


function FicheLogement({logements}) {
    const {id} = useParams()

    const logement = logements.find((elem)=>elem.id==id)
    if (!logement){
        return <Error404 />
    }
    const equipements = logement.equipments.join(', ')

    return (
        <main>
            
            <Carrousel pictures={logement.pictures}/>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div>
                <p>{logement.host.name}</p>
                <img src={logement.host.picture}/>
            </div>
            <Tags logement={logement}/>
            <Rating  logement={logement}/>
            <div>
                <FicheInfo title="Description" content={logement.description}/>
                <FicheInfo title="Equipements" content={equipements}/>
            </div>
        </main>
    )
}

export default FicheLogement
