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

    const hostName = logement.host.name
    console.log(hostName)

    return (
        <main className='ficheLogement'>
            <Carrousel pictures={logement.pictures}/>
            <div className='mainInfo'>
                <div className='mainInfo__description'>
                    <div className='mainInfo__title'>
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <Tags logement={logement}/>
                </div>
                <div className="mainInfo__hostAndRating">
                    <div className='mainInfo__host'>
                        <p>{hostName}</p>
                        <img className='mainInfo__host--picture' src={logement.host.picture}/>
                    </div>
                    <Rating  logement={logement}/>
                </div>
            </div>
            <div className='ficheLogement__infoLogement'>
                <FicheInfo title="Description" content={logement.description}/>
                <FicheInfo title="Equipements" content={equipements}/>
            </div>
        </main>
    )
}

export default FicheLogement
