import React from 'react'
import { Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MoviePlayer from './components/MoviePlayer'

const BaseRouter = () => {
    return(
        <div>
            <Route exact path='/' component={ MovieList } />
            <Route exact path='/:movieID' component={ MoviePlayer } />
        </div>
    )
}

export default BaseRouter