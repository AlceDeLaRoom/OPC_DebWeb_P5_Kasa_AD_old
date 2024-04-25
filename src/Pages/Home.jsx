import FicheApercu from '../components/FicheApercu'
import pagePicture from "../assets/Image source 1.jpg"


function Home({logements}) {

  return (
    <main>
      <div>
        <img src={pagePicture} alt="plage rocailleuse"/>
        <p>Chez vous, partout et ailleurs</p>
      </div>
      {logements.map((elem)=>(
        <FicheApercu key={elem.id} logement={elem}/>
      ))}
    </main>   
  )
}

export default Home;
