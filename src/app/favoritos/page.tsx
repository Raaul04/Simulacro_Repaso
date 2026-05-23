'use client'
import { useLista } from "@/context/Provider"
import "./favorito.css"
import Episode from "../components/Episode"
import { useRouter } from "next/navigation"



const page = () => {
    const router=useRouter()
    const { episodes, deleteFromList } = useLista()
    
    return (
        <div className="containerFavoritos">
            <h1>Favoritos Page</h1>
           
            {episodes.map((e) => (
                <div className="containerLista"key={e.id}>
                    <Episode episode={e}></Episode>
                    <button className="BTNELIMINAR" onClick={() => deleteFromList(e.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
            <button onClick={()=>router.back()}>Volver atras</button>

        </div>
    )
}

export default page