import { useParams, Link } from 'react-router-dom'
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const url = `https://api.themoviedb.org/3/movie/${id}`

  function timeConvert (n) {
    var num = n
    var hours = (num / 60)
    var rhours = Math.floor(hours)
    var minutes = (hours - rhours) * 60
    var rminutes = Math.round(minutes)
    return `${rhours} hr  ${rminutes} mins `
  }

  // const {data:movie, error, isLoading} = UseFecth('https://api.themoviedb.org/3/movie/'+ id)

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzE2ZDNiYzgxZmM2MGJmOTMxMzZiZDdiNWFiNDljMyIsInN1YiI6IjY1MDA0NmE4NmEyMjI3MDBmZDIwMzdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.udEdw6quGQDirCxpU770PmMzdpt570nJ7v3Oxj1QT-I'
      }
    }

    fetch(url, options)
      .then(res => {
        if (!res.ok) {
          console.log('error 1')
          throw Error('could not fetch data')
        } return res.json()
      }).then(data => {
      // console.log(data)
      setMovie(data)
      setIsLoading(false)
      setError(false)
    })
      .catch(err => {
        setIsLoading(false)
        setError(err.message)
        setMovie([])
      }
    )
  }, [ url])
  return (
    <div className='movie-detail xl:grid grid-cols-12'>
      <div className='side-nav border-r-2 rounded-tr-3xl rounded-br-3xl col-span-2 border-gray-600 top-0 left-0 h-screen sticky'>
        <div className='log-nav my-10 text-gray-700 font-bold'>
          <h1 className='text-3xl capitalize flex justify-around'><Link to='/'> matrix movie </Link></h1>
          <nav className='my-3 mt-24'>
            <Link to='/' className='link '>
            <FontAwesomeIcon icon='home' />
            <h1>home</h1>
            </Link>
            <Link to='/' className='link'>
            <FontAwesomeIcon icon='fa-solid fa-film' />
            <h1>movies</h1>
            </Link>
            <Link to='/' className='link'>
            <FontAwesomeIcon icon='fa-solid fa-tv' />
            <h1>tv series</h1>
            </Link>
            <Link to='/' className='link'>
            <FontAwesomeIcon icon='fa-solid fa-calendar-days' />
            <h1>upcoming</h1>
            </Link>
          </nav>
        </div>
      </div>
      {isLoading && <div className='load'>
                      loading....
                    </div>}
      {error && <div className='error'>
                  {error}
                </div>}
      {movie && (
       <div className='my-10 font-semibold text-xl col-span-10 mx-7 '>
         <div className='detail-img h-96 w-full mb-7'>
           <img
             className='h-full w-5/6 mx-auto rounded-3xl object-cover'
             alt={movie.name}
             srcSet={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
             />
         </div>
         <div className='flex justify-around align-middle items-center text- mb-5 leading-loose text-2xl'>
           <h2 data-testid='movie-title' className=' my-3'>{movie.title}</h2>
           <h2 data-testid='movie-release-date' className='my-3'>{movie.release_date}</h2>
           <h2 data-testid='movie-runtime' className=''>{timeConvert(movie.runtime)}</h2>
           {!movie.adult && <h2 className=''>PG-13</h2>}
           <div className='flex justify-between font-bold text-lg '>
             {movie.genres && movie.genres.map(genre => {
              
                return (
                  <h2 className='mx-3 px-3 py-2 text-red-500 ' key={genre.id}>{genre.name}</h2>
                )
              })}
           </div>
           <h2 className='text-2xl font-light text-opacity-100'>{movie.vote_average} | <span className='text-2xl font-extrabold'>{movie.vote_count}</span></h2>
         </div>
         <h2 data-testid='movie-overview' className='text-gray-800 text-2xl font-normal '>{movie.overview}</h2>
         <h2 data-testid='movie-release-date' className='my-5 capitalize'>year of release: <span className='text-red-500 text-2xl'>{movie.release_date}</span></h2>
         <div className='flex capitalize'>
           {`production country: `}
           {movie.production_countries
            && movie.production_countries
              .map(country => {
            
                return (
                  <h2 className='mx-2' key={country.name}><span className='text-red-500 text-2xl'>{country.name}</span></h2>
                )
              })}
         </div>
       </div>
       )}
    </div>
  )
}

export default MovieDetail
