const posterPrefixUrl = 'https://image.tmdb.org/t/p/original';

function MovieCard(props) {

    return (
        <section className="movie" style={{ margin: '10px auto'}}>
            <img 
                style={{ width: '330px' }}
                src={posterPrefixUrl + props.movieData.poster_path} />
            <div className="average" style={{ display: 'flex'}}>
                <span className="star">⭐️</span>
                <span className="rating">{props.movieData.vote_average}</span>
            </div>
            <div className="name">
                {props.movieData.original_title}
            </div>
        </section>
    )
  }
  
  export default MovieCard
  