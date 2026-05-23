
import { EpisodeS } from "@/app/types/type"
import "./styles.css"
import { useRouter } from "next/navigation"

const Episode=({episode}:{episode:EpisodeS})=>{
        const router=useRouter()

    return(
        <div className="episodeComponente">
            <h1>{episode.name}</h1>
           
            <div className="titleEpisode">
                <p>{episode.episode}</p>
                <p>{episode.created}</p>
                <button className="buttonEpisode" onClick={()=>router.push(`/episode/${episode.id}`)}>Ver episodio</button>

            </div>
            

        </div>
    )
}

export default Episode