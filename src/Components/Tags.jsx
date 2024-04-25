function Tags({logement}){

    return(
        <div>
            {logement.tags.map((e)=>(
                <p>{e}</p>
            ))}
        </div>
    )
}

export default Tags