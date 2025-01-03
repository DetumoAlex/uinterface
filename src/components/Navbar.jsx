

const Navbar = () => {
  return (
    <nav className='navbar p-5 flex items-center mx-w-[600px] my-0 mx-auto border shadow-xl'>
        <h1 className="text-pink-500 font-extrabold text-xl">DTND Blog</h1>

        <div className="links ml-auto">
            <a href="/" className="ml-4 p-2 hover:bg-pink-600 hover:text-white rounded-xl">Home</a>
            <a href="/" className="ml-4 p-2 hover:bg-pink-600 hover:text-white rounded-xl">New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar
