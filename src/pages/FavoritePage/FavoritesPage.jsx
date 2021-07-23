import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import FavoriteList from '../../component/FavoriteList';

function FavoritesPage() {
    var fav = FavoriteList.getInstance();
    const initialList = JSON.parse(localStorage.getItem("Artists"));
    console.log(typeof(initialList))
    const[list, setList] = useState(initialList)

    useEffect(()=>{
        fav = FavoriteList.getInstance();
        let local_list = JSON.parse(localStorage.getItem("Artists"));
        // console.log(localStorage.getItem('Artist'))
        console.log('local list = ' + local_list)
        console.log(typeof(local_list))
        setList(local_list);
        console.log(list);
    }, [])
    
    const removeFavorite = (e) =>{
        console.log(e.target.value);
        fav.removeList(e.target.value);
        const newList = fav.getList()
        localStorage.setItem('Artists',JSON.stringify(newList));
        const local_list = JSON.parse(localStorage.getItem("Artists"));
        setList(local_list);
        window.location.reload();
    }

    return (
        <div>
            {list?.map(artist => {
                return (
                    <div>
                        <div className="card" key={artist}>
                            <div className="card-body">
                                <div className="card-title">{artist}</div>
                                <Link to={`/artist/${artist}`} className="btn btn-primary btn-spacing">Go To Page</Link>
                                <button className="btn btn-danger btn-spacing" value={artist} onClick ={removeFavorite}>Remove</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default FavoritesPage