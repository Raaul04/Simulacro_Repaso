
export type CharacterS={
    id:number
    name:string
    status:string
    species:string
    type:string
    gender:string
    origin:{
        name:string
        url:string
    }
    location:{
        name:string
        url:string
    }

    image:string
    episode:string[]
    url:string
    created:string
}

export type Location={
    id:number
    name:string
    type:string
    dimension:string
    residents:string[]
    url:string
    created:string
}

export type Episode={
    id:number
    name:string
    air_date:string
    episode:string
    characters:string[]
    url:string
    created:string
}

export type Info={
    count:number
    page:number
    next:string|null
    prev:null|string
}

export type ResultsCharacter={
    info:Info
    results:CharacterS[]
}

export type ResultsLocations={
    info:Info
    results:Location[]
}

export type ResultsEpisodes={
    info:Info
    results :Episode[]
}