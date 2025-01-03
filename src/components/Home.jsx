
const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas ')
    }

    const handleClickAgain = () => {
        console.log(`hello $name`)
    }

  return (
    <div>
        <div className="home mx-w-[600px] my-10 mx-auto p-5">
            <h1>Homepage</h1>
            <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClickAgain('mario')}>click me again</button>
        </div>
    </div>
  )
}

export default Home
