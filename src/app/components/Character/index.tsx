import { CharacterS } from "@/app/types/type"
import "./style.css"


const Character=({personaje}:{personaje:CharacterS})=>{

    return(
        <div className="characterComponente">
            <h1>{personaje.name}</h1>
            <p>{personaje.status}</p>
            <p>{personaje.species}</p>
            <img src={personaje.image} alt={personaje.name}></img>
        </div>
    )
}

export default Character