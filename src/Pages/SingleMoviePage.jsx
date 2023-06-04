import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import ajax from "../api/ajax"

const SingleMoviePage = () => {

  const [movieDetails, setMovieDetails] = useState({})

  // movie/movie_id?language=en-US
  const {id} = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await ajax.get(`/movie/${id}?language=en-US`)
      console.log(data);
      setMovieDetails(data)
    }
    fetchData();
  }, [id])
  

  return (
    <div>
        <h1>Single Movie Page</h1>
        <p>Movie is - {id}</p>
        <h1>{movieDetails.original_title}</h1>
        <p>{movieDetails.overview}</p>
    </div>
  )
}

export default SingleMoviePage