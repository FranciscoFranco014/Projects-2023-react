// import { useEffect, useState, useRef } from 'react'
import { useState ,useCallback } from 'react'
import './App.css'
import { Movies } from './components/Movies.jsx'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import debounce from 'just-debounce-it'
// import withoutResults from './mocks/without-results.json'

// function useSearch(){
//   const [search, updateSearch] = useState('')
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     if (search == '') {
//       setError('La busqueda esta vacía, no hubo resultados')
//       return 
//     } 
//     if( search.length < 3){
//       setError('La busqueda debe tener al menos 3 caracteres')
//       return
//     }
//     setError(null)
//   }, [search])
//   return {search, updateSearch, error }
// }

function App() {
const [sort, setSort] = useState(false)
const {search, updateSearch, error} = useSearch()
const { movies,loading, getMovies } = useMovies({search, sort})

const debouncedGetMovies = useCallback(
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
        <h1>Movie Finder</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name="query" type="text" id="" placeholder='Harry Potter, Avengers, El Hobbit...' />
          
          <button  type='submit'>Search</button>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          
        </form>
        {error && <p className="error" style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={ movies }/>
        }
        
      </main>
      
    </div>
  )
}

export default App
