import React, { Component } from 'react'
//import Movies from './movies/movie1.mp4'
import Movies from '../movies/MovieImporter'

class TestComponent extends Component{
    render(){
        //console.log(Importer)
        return (
            <div>
                {/* <video width="320" height="240" controls>
                    <source src={Movies[0]}type="video/mp4" />
                </video> */}

                <ul>
                {
                    Movies.map(mv => (<li> <h1>{mv.name}</h1> <h3>{mv.description}</h3> </li>) )
                }
                </ul>
                
            </div>
        )
    }
}

export default TestComponent