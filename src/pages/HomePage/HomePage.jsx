import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import {gql, useQuery} from '@apollo/client'
import './HomePage.css'


function HomePage() {
    const [artist, setArtist] = useState('')
    
    const handleArtist = event =>{
        setArtist(event.target.value)
    }


    return (
        <div className="spacing">
            <div>
                <h1 className="display-4">Welcome!</h1>
                <p className="lead">Use the search bar to search for your favorite artists</p>
            </div>
            <div className="input-group">
                <input type="search" onChange={handleArtist} name="artist_inp" className="form-control rounded" placeholder="Artist Name"/>
                <Link to={`artist/${artist}`} className="btn btn-outline-primary">Search</Link>
            </div>
        </div>
    )
}
export default HomePage