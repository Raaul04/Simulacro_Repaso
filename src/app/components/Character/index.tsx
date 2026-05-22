'use client'
import { CharacterS } from "@/app/types/type"
import "./style.css"
import { useRouter } from "next/navigation"
import { ReactNode } from "react"


// `showDetailButton` controla si el componente muestra el botón
// de navegación al detalle. Usamos un booleano porque es simple,
// explícito y fácil de entender desde el padre (por ejemplo, la
// página de detalle puede pasar `false` para ocultarlo).
const Character = ({ personaje, showDetailButton = true, extraElements }: { personaje: CharacterS, showDetailButton?: boolean, extraElements?: ReactNode }) => {
    const router = useRouter()

    return (
        <div className="characterComponente">
            <img src={personaje.image} alt={personaje.name}></img>
            <div className="atribContainer">
                <h1>{personaje.name}</h1>
                <p>{personaje.status}</p>
                <p>{personaje.species}</p>
                    {extraElements}
            </div>

            {/* Renderizamos el botón solo cuando `showDetailButton` sea true.
                Evita duplicar la navegación cuando estamos ya en la página
                de detalle y permite controlar la UI desde el padre. */}
            {showDetailButton && (
                <button className="buttonShow" onClick={() => router.push(`/character/${personaje.id}`)}>
                    Ver detalle 
                </button>
            )}

        </div>
    )
}

export default Character