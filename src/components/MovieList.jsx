import MovieCard from './MovieCard'

function MovieList(props) {

  return (
    <section 
        className="movieList"
        style={{
            width: '100%',
            minHeight: '20vh',
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '5px'
        }}
    >
        { props.movies?.map((movieData, i) => <MovieCard movieData={movieData} key={i} /> ) }
    </section>
  )
}

export default MovieList
