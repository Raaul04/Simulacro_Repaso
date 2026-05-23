'use client'
import { useEffect, useState } from "react"
import "./page.css"
import { ResultsLocations } from "../types/type"
import api from "@/api/axios"
import LocationComponente from "../components/Location"
import Paginador from "../components/Paginador"

const LocationPage = () => {
    const[locations,setLocations]=useState<ResultsLocations|null>(null)
    const[loading,setLoading]=useState<boolean>(true)

    const [page,setPage]=useState<number>(1)

    const getLocations=async()=>{
        try {
            api.get(`/location/?page=${page}`)
            .then((e)=>{
                setLocations(e.data)
            })
            .finally(()=>{
                setLoading(false)
            })

        } catch (error) {
            alert(String(error))
        }
    }

    useEffect(()=>{
        getLocations()
    },[page])


    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <>
        <h1>Location</h1>
        <div className="locationList">
            {locations?.results.map((e)=>(
                <div key={e.id}>
                    <LocationComponente location={e}></LocationComponente>
                    </div>
                    
            ))}
            <Paginador next={!!locations?.info.next} prev={!!locations?.info.prev} page={page} setPage={(e)=>{setPage(e)}}></Paginador>
       
        </div>
        </>
    )
}

export default LocationPage