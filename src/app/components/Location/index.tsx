'use client'
import { LocationS } from "@/app/types/type"
import "./style.css"
import { useRouter } from "next/navigation"

const LocationComponente=({location}:{location:LocationS})=>{

    const router=useRouter()

    return(
        <div className="containerLocation">
            <h1>{location.name}</h1>
            <div className="locationAtrib">
                <strong>{location.dimension}</strong>
                <p>Creada: {location.created}</p>
                <button className="buttonLocation"onClick={()=>router.push(`/location/${location.id}`)}> Ver personajes de la Location</button>
            </div>

        </div>
    )
}

export default LocationComponente