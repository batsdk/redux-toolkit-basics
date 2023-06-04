import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getShowList } from '../store/features/shows/showsSlice';

const ShowsPage = () => {

    const dispatch = useDispatch();
    const {shows} = useSelector(state => state.shows)


    useEffect(() => {
        dispatch(getShowList("Value"));
        console.log(shows);
    }, [])
    
  return (
    <>
        <div>ShowsPage</div>
        {shows.map((show,index)=> {
            return (
                <h1  key={show.id}>show name = {show.name}</h1>
            )
        })}
    </>
  )
}

export default ShowsPage