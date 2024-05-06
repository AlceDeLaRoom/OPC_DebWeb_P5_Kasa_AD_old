import FicheApercu from "../components/FicheApercu";
import pagePicture from "../assets/Image source 1.jpg";

function Home({ logements }) {
    return (
        <main className="home">
            <div className="home__banner">
                <img src={pagePicture} alt="plage rocailleuse" />
                <div className="home__banner--mask">
                  <p>Chez vous, partout et ailleurs</p>
                </div>
            </div>
            <div className="home__gallery">
                {logements.map((elem) => (
                    <FicheApercu key={elem.id} logement={elem} />
                ))}
            </div>
        </main>
    );
}

export default Home;
