import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import MovieList from './components/MovieList'
import LoadMore from './components/LoadMore'
import Search from './components/Search'

function App() {
  const [movies, setMovies] = useState()
  const [page, setPage] = useState(2)
  const [searchValue, setSearchValue] = useState('');
  const apiKey = "REPLACE WITH YOUR API KEY";
  let rootUrl = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&page=';
  let filterUrl = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';
  const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc" + `&api_key=${apiKey}`

  const handleLoadMore = () => {
    setPage(page + 1);
    axios.get(rootUrl + page + `&api_key=${apiKey}`)
      .then(response => {
        setMovies(movies.concat(response.data.results))
      })
  }

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)
  }

  const handleSearch = () => {
    let query = searchValue.replace(' ', '+');
    axios.get(filterUrl + `&api_key=${apiKey}&query=${query}`)
      .then(response => {
        setMovies(response.data.results);
      })
  }

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setMovies(response.data.results)
      })
  }, [])

  return (
    <>
      <header>Flixster</header>
      <Search 
        searchValue={searchValue} 
        handleSearchChange={handleSearchChange}
        handleSearch={handleSearch} />
      <MovieList movies={movies} />
      <LoadMore handleOnClick={handleLoadMore} />
    </>
  )
}

export default App
