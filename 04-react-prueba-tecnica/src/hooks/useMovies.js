import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'


export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const lastSearch = useRef(search)


  const getMovies = async () =>{
    if(search == lastSearch.current) return
    
    try{
      setLoading(true)
      setError(null)
      lastSearch.current = search
      const newMovie = await searchMovies({ search })
      setMovies(newMovie)
    } catch(e){
      setError(e.message)
    } finally{
      setLoading(false) // es necesario para que setee nuevamente en 'false' el loading
                        // de lo contrario, quedaria en loop infinito el loading de busqueda
    }   
  }
  
  const sortedMovies = useMemo(() =>{
    return sort
    ? [... movies].sort((a, b) => b.year.localeCompare(a.year))
    : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading, error}
}