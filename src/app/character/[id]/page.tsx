'use client'
import api from "@/api/axios"
import { CharacterS } from "@/app/types/type"
import { useParams, useRouter } from "next/navigation"
import Character from "@/app/components/Character"
import { useEffect, useState } from "react"
import "@/app/components/Character/style.css"
import "@/app/character/page.css"


const CharacterId=()=>{
    
    const router=useRouter()
    const {id}=useParams()
    const [character,setcharacter]=useState<CharacterS|null>(null)
    const[loading,setLoading]=useState<boolean>(true)

    useEffect(()=>{
        if(!id) return

        api.get(`/character/${id}`)
        .then((e)=>{
            setcharacter(e.data)
        })
        .finally(()=>{
            setLoading(false)
        })
        
    },[id])
    
    if(loading){
        return <h1>Loading...</h1>

    }

     if (!character) {
        return <h1>Cargando Personaje...</h1>
    }
    return(
        <div>
            <Character
                personaje={character}
                showDetailButton={false}
                extraElements={(
                    <div>
                        <p>{character.gender}</p>
                        <p>{character.origin.name}</p>
                    </div>
                )}
            />
            <button className="buttonId" onClick={()=>router.push("/character")}>Volver a la lista de personajes</button>
            <button className="buttonId"onClick={()=>router.back()}>Volver Atras</button>

            
        </div>
    )
}

export default CharacterId