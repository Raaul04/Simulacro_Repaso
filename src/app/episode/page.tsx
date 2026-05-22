'use client'

import { useEffect, useState } from "react"
import { ResultsEpisodes } from "../types/type"
import api from "@/api/axios"
import Episode from "../components/Episode"
import "./page.css"
import { useRouter } from "next/navigation"
import Paginador from "../components/Paginador"



const episode = () => {
    const router=useRouter()
    const [episode, setEpisode] = useState<ResultsEpisodes | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const[page,setPage]=useState<number>(1)
    const getEpisode = async () => {
        try {
            api.get(`/episode/?page=${page}`)
                .then((e) => {
                    const { data }: { data: ResultsEpisodes } = e
                    setEpisode(data)
                })
                .finally(() => {
                    setLoading(false)
                })
        } catch (e) {
            alert(String(e))
        }
    }

    useEffect(() => {
        getEpisode()
    },[page])

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="episodelist">
            {episode?.results.map((ep) => (
                <Episode key={ep.id} episode={ep}></Episode>
            )
            )}

            <Paginador next={!!episode?.info.next} prev={!!episode?.info.prev} page={page} setPage={((e)=>{setPage(e)})}></Paginador>

        </div>
    )
}

export default episode