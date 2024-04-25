import activeStar from '../assets/colorful_star.png'
import inactiveStar from '../assets/gray_star.png'

function Rating({logement}){
    const rangeRating = [1,2,3,4,5]
    const activeStarImg = (e) => <img src={activeStar} key={`star${e}`} alt='étoile pleine' />
    const inactiveStarImg = (e) => <img src={inactiveStar} key={`star${e}`} alt='étoile grise' />

    return(
        <div>
            {rangeRating.map((elem)=>elem>logement.rating?inactiveStarImg(elem):activeStarImg(elem))}
        </div>
    )
}

export default Rating