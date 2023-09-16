// import { useState, useEffect } from 'react'
import Movielist from './Movielist'
import UseFecth from './UseFetch'
const Homepage = () => {
  const {data:movies, isLoading, error} = UseFecth('https://api.themoviedb.org/3/movie/top_rated')
  return (
    <div className=''>
      {movies && <Movielist movies={movies} title={'featured movie'} />}
      {error && <div className='text-lg text-red-500'>
                  {error}
                </div>}
      {isLoading && <div className='load'>
                      loading....
                    </div>}
    </div>
  )
}

export default Homepage
