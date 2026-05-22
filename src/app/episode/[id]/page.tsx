'use client'

import api from "@/api/axios"
import { EpisodeS } from "@/app/types/type"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"


const episode=()=>{
    const router=useRouter()
    const {id}=useParams()
    const[episode,setEpisode]=useState<EpisodeS|null>(null)
    const[loading,setLoading]=useState<boolean>(true)

    const getEpisodeId=async()=>{
        try {
            api.get(`/episode/${id}`)
            .then((e)=>{
                setEpisode(e.data)
            })
            .finally(()=>{
                setLoading(false)
            })
        } catch (error) {
            alert(String(error))
        }
    }

    useEffect(()=>{
        getEpisodeId()
    },[id])

    if(loading){
        return <h1>Loading...</h1>
    }

    return(
        <div style={{display:"flex",flexWrap:"wrap", backgroundColor:"lightgray",   alignItems:"center",gap:"20px" ,marginTop:"20px", border:"1px solid black", borderRadius:"10px",  padding:"20px"}}>
            {episode?.characters.map((characterUrl) => {
                return (
                    <button style={{padding:"10px 20px",fontSize:"10px",cursor:"pointer", backgroundColor:"cyan" }}
                        key={characterUrl}// el key es el URL del personaje, que es único
                        onClick={() => router.push(characterUrl.replace(`https://rickandmortyapi.com/api`, ``))}
                        // Esto redirige a la página del personaje, eliminando la parte base de la URL.
                        // Dando resultado en algo como /character/1
                        //Y con /character/[id]/page.tsx se renderiza la página del personaje correspondiente al id.
                    >                                                                                          
                        Ver personaje
                    </button>
                )
            })}
            <button style={{padding:"10px 20px",fontSize:"10px",cursor:"pointer", backgroundColor:"red" }} onClick={()=>router.push(`/episode`)}>Volver a episodes</button>

        </div>
    )


}

export default episode