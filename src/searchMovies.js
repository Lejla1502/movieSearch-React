import React, {useState} from 'react';

import MovieCard from "./movieCard";


export default function SearchMovies()
{
    //initial value to be empty string
    const [query, setQuery]=useState('');

    const[movies,setMovies]=useState([]);


    const searchMovies= async(e)=>
    {
        e.preventDefault();


        const url = `https://api.themoviedb.org/3/search/movie?api_key=55916023bc876b42dec160b59b4204c0&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
            const res= await fetch(url);
            const data=await res.json();

            setMovies(data.results);
        }
        catch(err)
        {
            console.error(err);
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Movie Name</label>
                <input className="input" type="text" name="query" 
                placeholder="i.e. Jurassic Park" value={query}
                onChange={(e)=>setQuery(e.target.value)}></input>
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie=>movie.poster_path).map(movie=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </>
    );
}