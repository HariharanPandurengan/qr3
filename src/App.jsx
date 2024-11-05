import './App.css'
import UrlGen from './components/UrlGen'
import UrlUnmask from './components/UrlUnmask'
import A from './components/A'
import B from './components/B'
import { Routes,Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<UrlGen></UrlGen>}></Route>
        <Route path="/unMask/:maskedUrl" element={<UrlUnmask></UrlUnmask>}></Route>
        <Route path='/A/:maskedUrl' element={<A></A>}></Route>
        <Route path='/B/:maskedUrl' element={<B></B>}></Route>
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </>
  )
}

export default App
