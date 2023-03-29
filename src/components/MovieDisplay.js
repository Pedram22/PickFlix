

const MovieDisplay = (props) => {
    console.log(props)
    return (
        <section className="movieSuggestion">
            
               
                <h3>Check this Movie out!</h3>

                <div className="movieShowcase">
                <h2>{props.selectedMovie.title}</h2>
                <img src={`https://image.tmdb.org/t/p/w500${props.selectedMovie.poster_path}`} alt=""/>
                </div>
          

        </section>
    )
}

export default MovieDisplay;