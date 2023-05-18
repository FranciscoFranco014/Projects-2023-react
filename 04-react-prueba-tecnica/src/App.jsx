import { useState ,useCallback } from 'react'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'

import './App.css'

function App() {
const [sort, setSort] = useState(false)
const {search, updateSearch, error} = useSearch()
const { movies,loading, getMovies } = useMovies({search, sort})

// eslint-disable-next-line react-hooks/exhaustive-deps
const debouncedGetMovies = useCallback (
  debounce(search =>{
  console.log('search', search)
}, 500)
, []
)

const handleSubmit = (event) => {
  event.preventDefault()
  getMovies()
}


const handleSort = () => {
  setSort(!sort)
}

const handleChange = (event) => {
  const newSearch = event.target.value //ejemplo de PRE-VALIDACION
  updateSearch(newSearch)
  debouncedGetMovies(newSearch)
}





  return (
    <div className='page'>

      <header >
        <img className="icon"src="./src/assets/popcorn.png" alt="icon" />
        <h1>Movie Finder</h1>

        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name="query" type="text" id="" placeholder='Harry Potter, Avengers, El Hobbit...' />
          <button  type='submit'>Search</button>
          <input type="checkbox" onChange={handleSort} checked={sort} />
        </form>

        {error && <p className="error" style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={ movies }/>}
      </main>

    </div>
  )
}

export default App
