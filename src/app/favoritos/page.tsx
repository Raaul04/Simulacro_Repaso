'use client'
import { useLista } from "@/context/Provider"
import "./favorito.css"
import Episode from "../components/Episode"



const page = () => {
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
        </div>
    )
}

export default page