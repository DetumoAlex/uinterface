

const Navbar = () => {
  return (
    <nav className='navbar p-5 flex items-center mx-w-[600px] my-0 mx-auto border'>
        <h1 className="text-pink-500">DTND Blog</h1>

        <div className="links ml-auto">
            <a href="/" className="ml-4 p-2 hover:bg-pink-800 text-white">Home</a>
            <a href="/" className="ml-4 p-2 hover:bg-pink-800 text-white">New Blog</a>
        </div>
    </nav>
  )
}

export default Navbar
