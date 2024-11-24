// Handles application routing and layout
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Your routes here */}
      </Routes>
    </BrowserRouter>
  )
}

export default App