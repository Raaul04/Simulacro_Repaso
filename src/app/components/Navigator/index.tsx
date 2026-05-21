import Link from "next/link"
import "./style.css"


const Navigator=()=>{

    type Rutas={
        name:string
        ruta:string
    }

    const rutas:Rutas[]=[
         {
            name: "El hogar",
            ruta: "/"
        },
        { 
            name:"character",
            ruta:"/character"
        },
        {
            name:"episode",
            ruta:"/episode"
        },
        {
            name:"location",
            ruta:"/location"

        }
    ]
       
    return(
        <div className="containerNavigator">
            {rutas.map((r)=>(
                <Link className="nombre_link" key={r.ruta} href={r.ruta}>
                        {r.name}
                </Link>
            ))}
        </div>
    )
}

export default Navigator