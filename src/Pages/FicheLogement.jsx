import '../styles/FicheLogement.css'
import { useParams } from 'react-router-dom'
import FicheInfo from '../Components/FicheInfo'


function FicheLogement() {
    const {logementNumber} = useParams()


    return (
        <main>
            <h1>Appartements: {logementNumber}</h1>
            <div className='fiche-info'>
                <FicheInfo title="Description"/>
                <FicheInfo title="Equipements"/>
            </div>
        </main>
    )
}

export default FicheLogement
