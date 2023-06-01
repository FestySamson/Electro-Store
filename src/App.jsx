import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/header componets/Nav'
import Contact from './pages/Contact'


function App() {
  
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/contact' Component={Contact}></Route>
        </Routes>
      </Router>
    </>  
  )
}

export default App
