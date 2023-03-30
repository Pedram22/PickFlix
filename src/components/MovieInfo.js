import { useState, useEffect } from 'react';

import axios from 'axios';

import Form from './Form';

import MovieDisplay from './MovieDisplay';

const MovieInfo = () => {

        const [ movieGenre, setMovieGenre ] = useState(null); 

        const [ randomMovie, setRandomMovie ] = useState({})

        const randomizer = (min, max) => {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min) + min);
        }
       
    useEffect( () => {
        if (movieGenre) {
    axios({
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
            
            api_key: '24b45c136e032a167e148085c61407a3',
            language:'en-US',
            include_adult: false,
            with_genres: movieGenre,
        }
    }).then( (apiData) => {
        
        const randomInteger = randomizer(0,19)
        setRandomMovie(apiData.data.results[randomInteger])
    })
}else {
    setRandomMovie({})
}
}, [movieGenre])


const getGenre = ( e, genre ) => {
    e.preventDefault()
    if (genre !== "placeholder") {
            
        setMovieGenre(genre)
    }
}
    return  (
      <>
      <Form handleSubmit={ getGenre } />
      {
        Object.keys(randomMovie).length !== 0
            ? <MovieDisplay selectedMovie={ randomMovie } />
            : <h3>Please Select A Genre For A Movie Suggestion!</h3>
        }
      </>  
    )
}

export default MovieInfo;