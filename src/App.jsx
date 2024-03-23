import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
    <Outlet/>
     {/* <Footer/> */}
    </>
  )
}

export default App