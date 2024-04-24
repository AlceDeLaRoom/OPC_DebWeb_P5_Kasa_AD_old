import '../styles/About.css'
import FicheInfo from '../components/FicheInfo'
import aboutInfo from "../datas/aboutInfo"
import pagePicture from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"

function About() {
    return (
        <main>
            <img src={pagePicture} alt="image d'une vallée"/>
            {aboutInfo.map((elem)=>(
        <FicheInfo title={elem.title} content={elem.content}/>
    ))}
        </main>
    );
}

export default About;
