import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar p-5 flex items-center mx-w-[600px] my-0 mx-auto border shadow-xl'>
        <h1 className="text-pink-500 font-extrabold text-xl">DTND Blog</h1>

        <div className="links ml-auto">
            <Link to="/" className="ml-4 p-2 hover:bg-gray-400 hover:text-white rounded-xl">Home</Link>
            <Link to="/create" className="ml-4 p-2 hover:bg-pink-600 hover:text-white rounded-xl">New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar
