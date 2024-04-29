import FicheInfo from '../components/FicheInfo'
import aboutInfo from "../datas/aboutInfo.json"
import pagePicture from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"

function About() {
    return (
        <main className='about'>
            <div className='about__banner'>
                <img src={pagePicture} alt="image d'une vallée"/>
            </div>
            
            <div className='about__list'>
                {aboutInfo.map((elem)=>(
                    <FicheInfo title={elem.title} content={elem.content}/>
                ))}
            </div>
        </main>
    );
}

export default About;
