import { useState } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
      </div>
     </div>
    </>
  )
}

export default App
