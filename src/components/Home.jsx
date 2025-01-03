import { useState } from "react"

const Home = () => {
    const [name, setName] = useState('alex')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        // console.log('hello, ninjas ')
        setName('detumo')
        setAge(30)
    }

    // const handleClickAgain = () => {
    //     console.log(`hello $name`)
    // }

  return (
    <div>
        <div className="home mx-w-[600px] my-10 mx-auto p-5">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
                <p>{name} is { age }</p>
            {/* <button onClick={() => handleClickAgain('mario')}>click me again</button> */}
        </div>
    </div>
  )
}

export default Home
