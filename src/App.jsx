import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Nav from './components/header componets/Nav'
import Contact from './pages/Contact'
import Popular from './components/popular/Popular'
import SingleProduct from './pages/SingleProduct'


function App() {
  
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
          <Route  path='/contact' Component={Contact}></Route>
          <Route exact path="/" component={Popular} />
          <Route path="/product/:id" component={SingleProduct} />

        </Routes>
      </Router>
    </>  
  )
}

export default App
