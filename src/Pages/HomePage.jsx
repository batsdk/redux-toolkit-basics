import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPopularMovies } from "../store/features/movies/movieSlice"
import { useNavigate } from "react-router"

const HomePage = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {popularMovies} = useSelector(state => state.movie)

  useEffect(() => {
    dispatch(getPopularMovies())
    console.log(popularMovies);
  }, [])  

  const getMovieDetails = (id) => {
    navigate("/movies/"+id)
  }

  return (
    <>
      <h1>Home Page</h1>
      {
        popularMovies.map(({original_title, id}) => {
          return (
            <h1 key={id} onClick={()=>{
              getMovieDetails(id)
            }} >Movie = {original_title}</h1>
          )
        })
      }
    </>
  )
}

export default HomePage