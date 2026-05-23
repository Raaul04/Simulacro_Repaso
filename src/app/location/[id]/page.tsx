'use client'
import { useParams } from "next/navigation"
import "./page.css"
import { useEffect, useState } from "react"
import { LocationS } from "@/app/types/type"
import api from "@/api/axios"
import { useRouter } from "next/navigation"



const LocationidPage = () => {

    const router=useRouter()
    const{id}=useParams()
    const[location,setLocation]=useState<LocationS|null>(null)
    const[loading,setLoading]=useState<boolean>(true)

    const getLocationId=async()=>{
        try {
            api.get(`/location/${id}`)
            .then((e)=>{
                setLocation(e.data)
            })
            .finally(()=>{
                setLoading(false)
            })


        } catch (error) {
            alert(String(error))
        }
    }

    useEffect(()=>{
        getLocationId()
    },[id])

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <div className="locationIdComp">
            <h1>Location Id</h1>
            <div className="locationPersonajes">
                {location?.residents.map((e)=>(
                    <div key={e}>
                        <button className="btnPersonajes" onClick={()=>router.push(e.replace(`https://rickandmortyapi.com/api`, ``))}>Ver Personaje</button>
                        </div>
                ))}

              

            </div>
              <button className="btnVolver"onClick={()=>router.back()}>Volver</button>
        </div>
    )
}

export default LocationidPage