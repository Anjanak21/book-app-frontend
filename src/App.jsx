import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Banner from "./pages/Home/Banner"
import './App.css'
import Footer from "./components/Footer"
import { AuthProvide } from "./contex/AuthContext"


function App() {
  

  return (
    <>
    
    <AuthProvide>

    <Navbar/>
    
    <main
     className="min-h-screen max-w-screen-2x1 mx-auto px-4 py-6 font-primary">
      <Outlet/>
      
      </main>
      < Footer/>
      </AuthProvide>
      
    </>
  )
}

export default App
