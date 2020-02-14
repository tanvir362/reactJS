import React from 'react'
import Movies from '../movies/MovieImporter'

const MoviePlayer = (props) =>{
    const movieId = props.match.params.movieID
    const movie = Movies[movieId]
    return(
        <div>
            <h2>{movie.name}</h2>
            <video width='100%' height="auto" autoPlay controls>
                <source src={ movie.src } />
            </video>
            Network stream: {movie.src}
        </div>
        

    );
}

export default MoviePlayer;