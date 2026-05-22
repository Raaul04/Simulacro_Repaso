'use client'
import { EpisodeS } from "@/app/types/type"
import { createContext, ReactNode, useContext, useState } from "react"


type ListaContextType={
    episodes:EpisodeS[]
    addToList:(item:EpisodeS)=>void
    deleteFromList:(item:number)=>void
}


const ListaContext=createContext<ListaContextType|null>(null)


export const ListProvider=({children}:{children:ReactNode})=>{
    const[episodes,setEpisode]=useState<EpisodeS[]>([])

    const addToList=(item:EpisodeS)=>{
        if(!episodes.some((episode)=>episode.id===item.id)){
            setEpisode([...episodes, item])
        }
    }

    const deleteFromList=(id:number)=>{
        setEpisode(episodes.filter(c=>c.id!==id))
    }


    return(
        <ListaContext.Provider value={{episodes, addToList, deleteFromList}}>
            {children}
        </ListaContext.Provider>

    )
}


export const useLista=()=>{
    const context=useContext(ListaContext)
    if(!context){
        throw new Error("tsx out of provider")
    }
    return context
}
