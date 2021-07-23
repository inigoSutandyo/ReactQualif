import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function AlbumPage() {
    let {id} = useParams();
    const[songs, setSongs] = useState([])
    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`)
        .then(res => res.json())
        .then(data => {
            setSongs(data.data)
        })
    }, [])

    return (
        <div>
            {songs?.map(song=>{
                return (
                    <div className="card" key={song.id}>
                        <div className="card-body">
                            <div className="card-title">{song.name}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumPage