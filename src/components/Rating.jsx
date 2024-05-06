import activeStar from '../assets/colorful_star.png'
import inactiveStar from '../assets/gray_star.png'

function Rating({logement}){
    const rangeRating = [1,2,3,4,5]
    const alt = logement.rating + " étoiles sur 5"
    const activeStarImg = (e) => <img src={activeStar} key={`star${e}`} alt={alt} />
    const inactiveStarImg = (e) => <img src={inactiveStar} key={`star${e}`} alt={alt} />

    return(
        <div className='rating'>
            {rangeRating.map((elem)=>elem>logement.rating?inactiveStarImg(elem):activeStarImg(elem))}
        </div>
    )
}

export default Rating