import FicheInfo from "../components/FicheInfo";
import aboutInfo from "../datas/aboutInfo.json";
import pagePicture from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";

function About() {
    return (
        <main className="about">
            <div className="about__banner">
                <img src={pagePicture} alt="vallée montagneeuse en pleine nature" />
            </div>

            <div className="about__list">
                {aboutInfo.map((elem, index) => (
                    <FicheInfo
                        key={elem.title + index}
                        content={[elem.title, elem.content]}
                    />
                ))}
            </div>
        </main>
    );
}

export default About;
