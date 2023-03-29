const MovieDisplay = (props) => {
    return (
        <section className="movieSuggestion">
            
               
                <h3>Check This Movie Out!</h3>

                <div className="movieShowcase">
                <h2>{props.selectedMovie.title}</h2>
                <p>Release Date: {props.selectedMovie.release_date}</p>
                <img src={`https://image.tmdb.org/t/p/w500${props.selectedMovie.poster_path}`} alt={`Movie poster for ${props.selectedMovie.title}`}/>
                </div>
          

        </section>
    )
}

export default MovieDisplay;