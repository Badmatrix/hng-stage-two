import { Link } from 'react-router-dom'
const Navbar = () => {

  return (
    <nav className='navbar md:flex md:justify-between  border-b px-2 py-4 align-middle mx-auto items-center'>
      
      <h1 className=' font-bold text-3xl first-letter:capitalize text-gray-700 hover:text-gray-800'><Link to='/'>matrix movie</Link></h1>
      <div className='link md:flex md:justify-between my-7'>
        <h2><Link to='/' className='link-a'> sign up </Link></h2>
        <h2><Link to='/' className='md:ml-5 link-a'> login </Link></h2>
      </div>
    </nav>
  )
}

export default Navbar
