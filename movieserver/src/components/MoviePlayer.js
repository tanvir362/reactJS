import React from 'react'
import Movies from '../movies/MovieImporter'

const MoviePlayer = () =>{
    return(
        <div>
            <video width='100%' height="auto" controls>
                <source src={ Movies[1].src } />
            </video>
            Network stream: {Movies[1].src}
        </div>
        

    );
}

export default MoviePlayer;