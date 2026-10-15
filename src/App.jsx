import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Woman from './pages/Woman'
import Man from './pages/Man'
import Register from './pages/Register'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
      <div className=''>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/woman' element={<Woman/>}/>
          <Route path='/man' element={<Man/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  )
}

export default App
