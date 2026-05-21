'use client'
import { useEffect, useState } from "react";
import { CharacterS, ResultsCharacter } from "../types/type";
import api from "@/api/axios";

const character = () => {
    const[character, setCharacter]=useState<CharacterS|null>(null)
    const[loading, setLoading]=useState<boolean>(true)
    const[page,setPage]=useState<number>(1)


    const getCharacter=async()=>{
        try{
        api.get(`/character?page=${page}`).then((e)=>{
            setCharacter(e.data)
        })
        .finally(()=>{
            setLoading(false)
        })

        }catch(e){
            alert(String(e))
        }
    }

    if(!loading){
        return(
            <h1></h1>
        )
    }

    useEffect(()=>{



    },[page])

  return (
    <div className="characterContainer">
        <h1>Character Page</h1>
    </div>
  )
}


export default character;   