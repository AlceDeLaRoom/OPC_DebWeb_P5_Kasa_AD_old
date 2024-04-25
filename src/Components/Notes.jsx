import colorfulStar from '../assets/colorful_star.png'
import grayStar from '../assets/gray_star.png'

function Notes({logement}){
    const rangeNotes = [1,2,3,4,5]
    const colorfulStarImg = <img src={colorfulStar} alt='étoile pleine' />
    const grayStarImg = <img src={grayStar} alt='étoile grise' />

    return(
        <div>
            {rangeNotes.map((elem)=>elem>logement.rating?grayStarImg:colorfulStarImg)}
        </div>
    )
}

export default Notes