import { useState, useEffect } from "react"
import BlogList from "./BlogList"

const Home = () => {
    // const [name, setName] = useState('alex')
    // const [age, setAge] = useState(25)

    // const handleClick = () => {
    //     // console.log('hello, ninjas ')
    //     setName('detumo')
    //     setAge(30)

    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] =useState(null)
    
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    // console.log(res);
                    if(!res.ok)
                        throw Error('could not fetch data')

                    return res.json()
                })
                .then(data =>{
                    setBlogs(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message);
                    
                })
        }, 1000)
        
    }, [])
    // const handleClickAgain = () => {
    //     console.log(`hello $name`)
    // }

  return (
       <div className="home mx-w-[600px] my-10 mx-auto p-5">
        {error && <div>{error}</div>}
        {isPending && <div>loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'detumo')} title="Detumo's blogs" handleDelete={handleDelete}/> */}
                {/* <p>{name} is { age }</p>
                <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClickAgain('mario')}>click me again</button> */}
        </div>
  )
}

export default Home
