function Tags({logement}){

    return(
        <div>
            {logement.tags.map((e, index)=>(
                <p key={`${e}${index}`}>{e}</p>
            ))}
        </div>
    )
}

export default Tags