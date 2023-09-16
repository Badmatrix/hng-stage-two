import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import ReactDOM from 'react-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faHome, faFilm, faTv, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faImdb } from '@fortawesome/free-brands-svg-icons'
import Homepage from './Home'
// import Navbar from './Navbar'
import MovieDetail from './Moviesdetail'
library.add(faCoffee, faHome, faFilm, faTv, faTwitter, faFontAwesome, faCalendarDays, faImdb)

function App () {
  return (
    <div className='App '>
      <Router>
        {/* <Navbar /> */}
        <div className='content'>
          <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/src/movies/:id' element={<MovieDetail/>} />
          </Routes>
        </div>
      </Router>
    </div>

  )
}

export default App
