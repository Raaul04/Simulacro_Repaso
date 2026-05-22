'use client'
import { useEffect, useState } from "react";
import { ResultsCharacter } from "../types/type";
import api from "@/api/axios";
import Character from "../components/Character";
import Paginador from "../components/Paginador";
import "./page.css"
const character = () => {

    const [character, setCharacter] = useState<ResultsCharacter | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [page, setPage] = useState(1)


    const getCharacter = async () => {
        try {
            api.get(`/character/?page=${page}`).then((e) => {
                setCharacter(e.data)
            })
                .finally(() => {
                    setLoading(false)
                })

        } catch (e) {
            alert(String(e))
        }
    }

 

    useEffect(() => {
        getCharacter()
    }, [page])

       if(loading){
        return(<h1>Loading...</h1>)
    }

    return (
        <div className="characterList">
            {character?.results.map((e) => (
                <div key={e.id}>
                    <Character personaje={e} />
                </div>

            ))}
                <Paginador next={!!character?.info.next} prev={!!character?.info.prev} page={page} setPage={((e)=>{setPage(e)})}></Paginador>

         </div>
  )
}


export default character;   