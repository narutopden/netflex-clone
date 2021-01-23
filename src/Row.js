import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./row.css";
function Row({title, fetchURL}) {
    const [movies, setMovies] = useState([]);
    // const baseurl="https://imdb-api.com/en/API/Posters/k_svjch3di/";
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            console.log(request.data.items);
            setMovies(request.data.items);
            return request
        }
        fetchData();
    },[fetchURL]);
    //console.log(movies);
    return (
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movies.map((movie) => (
            <img
              key={movie.id}
              className="row_poster"
              src={movie.id}
              alt={movie.title}
            />
          ))}
        </div>
        {/* {titles} */}
        {/* {container} */}
      </div>
    );
}

export default Row
