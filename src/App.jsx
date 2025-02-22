import { BrowserRouter as Router,Routes,Route,Link } from 'react-router'
import './App.css'
import MainPage from './pages/MainPage/MainPage'
import Planets from './pages/Planets/Planets'
import { useState } from 'react'

function App() {

  // const [data, setData] = useState(["Mars","Earth","Venus"]);
  return (
    <>
    <Router>
      {/* {data.map((planet) => {
       return (
        <Link to={`/planets/${planet}`} key={planet} >{planet} </Link>
       )
      })} */}
      <Routes>
        <Route  path='/planets/:name'  element={<Planets />}/>
        <Route  path='/'  element={<MainPage />}/> 
      </Routes>
    </Router>
    </>
  )
}

export default App
