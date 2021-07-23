import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
// import { useLocation } from 'react-router-dom';
import "./ArtistPage.css";
import { Link } from 'react-router-dom';
import FavoriteList from '../../component/FavoriteList';

function ArtistPage() {
    let {name} = useParams();
    
    console.log(name);
    const[albums, setAlbums] = useState([])
    useEffect(()=>{
        fetch(`https://spotify-rest.up.railway.app/artist?query=${encodeURI(name)}`)
        .then(res => res.json())
        .then(data => {
            setAlbums(data.data.albums)
        })
    }, [])

    const handleFavorites = () =>{
        let fav = FavoriteList.getInstance();
        console.log(fav);
        fav.addList(name);
        console.log(fav.getList());
        let lists = fav.getList()
        localStorage.setItem('Artists', JSON.stringify(lists))
    }

    return (
        <div className="container">
            <button className="btn btn-primary btn-spacing" onClick = {handleFavorites}>Add Artist To Favorites</button>
            <div className="row row-cols-auto justify-card" > 
                {albums?.map(album=>{
                    return(
                        <div className="col" key = {album.id}>
                            <div className="card card-sizing" >
                                <Link to={`album/${album.id}`} style={{ textDecoration:'none', textDecorationColor:'black' }}>
                                    <img className="card-img-top" src={album.image}alt="" />
                                    <div className="card-body">
                                        <h3  className="card-title">{album.name}</h3>
                                        <p className="card-subtitle">{name}</p>
                                    </div>
                                </Link>
                            </div>           
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ArtistPage 