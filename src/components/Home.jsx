import { useState } from "react"

const Home = () => {
    // const [name, setName] = useState('alex')
    // const [age, setAge] = useState(25)

    // const handleClick = () => {
    //     // console.log('hello, ninjas ')
    //     setName('detumo')
    //     setAge(30)

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'detumo', id: 1},
        {title: 'welcome party', body: 'lorem ipsum...', author: 'alex', id: 2},
        {title: 'web dev top tips', body: 'lorem ipsum...', author: 'detumo', id: 3}
    ])
    

    // const handleClickAgain = () => {
    //     console.log(`hello $name`)
    // }

  return (
        <div className="home mx-w-[600px] my-10 mx-auto p-5">
            {blogs.map((blog) => (
                <div className="blog-preview py-[10px] px-4 my-5 mx-0 hover:shadow-md" key={blog.id}>
                    <h2 className="text-xl text-pink-400 mb-2">{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))};
                {/* <p>{name} is { age }</p>
                <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClickAgain('mario')}>click me again</button> */}
        </div>
  )
}

export default Home
