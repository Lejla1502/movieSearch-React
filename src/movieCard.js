import React, {useState} from 'react';



//to avoid usng extra variable i.e. movie=props.movie or {movie}=props
//it is possible to define parameter as {movie} meaning
//when function receives paramater it will take property movie from props
//right away and use it as following in the body of function
export default function MovieCard({movie})
{
    //grab movie property from props; equals to movie=props.movie
    //const {movie}=props;
    return (
        <div className="card" >
                        <img className="card--image"
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                        alt={movie.title+'poster'}/>
                        <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card--desc"> {movie.overview}</p>


                        </div>
                    </div>
                
      );
}