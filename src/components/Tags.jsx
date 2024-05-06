function Tags({logement}){

    return(
        <div className="tags">
            {logement.tags.map((e, index)=>(
                <p className="tags__element" key={`${e}${index}`}>{e}</p>
            ))}
        </div>
    )
}

export default Tags