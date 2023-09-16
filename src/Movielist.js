import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Movielist = ({movies, title}) => {
  return (
    <div className='movie-list w-5/6 mx-auto'>
      
      <h2 className='first-letter:capitalize my-5 font-bold text-xl'>{title}</h2>
      <div className='mx-5 h-80 absolute'>
        {/* <img src={require("./myke-simon-atsUqIm3wxo-unsplash.jpg")} className='h-full w-full object-cover' alt='johm wick movie'/> */}
        <div className='relative'> 
            
        </div>
      </div>
      <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-14 mx-5 mb-7'>
        {movies.map((movie) => (
           <div>
             <div data-testid='movie-card' className='movie-card bg-gray-50 h-96 pb-12 shadow-sm' key={movie.id}>
               <Link to={`/src/movies/${movie.id}`}>
               <div className='movie-img h-5/6'>
                 <img
                   data-testid='movie-poster'
                   className='h-64 w-full'
                   alt={movie.name}
                   srcSet={'https://image.tmdb.org/t/p/original' + movie.poster_path} />
               </div>
               <div className='movie-txt px-3 font-bold text-lg'>
                 <h2 data-testid='movie-title'>{movie.title}</h2>
                 <h2 className='text-lg font-normal'><span className='text-4xl text-black'><FontAwesomeIcon icon='fa-brands fa-imdb' /></span>{movie.vote_average}/10</h2>
               </div>
               </Link>
             </div>
           </div>
         
         ))}
      </div>
    </div>
  )
}

export default Movielist
