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
        <main className='ficheLogement'>
            
            <Carrousel pictures={logement.pictures}/>
            <div className='banner'>
                <div className='banner__title'>
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                </div>
                <div className='banner__host'>
                    <p>{logement.host.name}</p>
                    <img className='banner__host__picture' src={logement.host.picture}/>
                </div>
            </div>
            <div className="tagsAndRatings">
                <Tags logement={logement}/>
                <Rating  logement={logement}/>
            </div>
            <div className='infoLogement'>
                <FicheInfo title="Description" content={logement.description}/>
                <FicheInfo title="Equipements" content={equipements}/>
            </div>
        </main>
    )
}

export default FicheLogement
