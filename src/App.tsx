/* plugin imports */
import { BrowserRouter, Routes, Route } from "react-router-dom"
/* component imports */
import { Login } from "./components/Guest/Login"
import { NavBar } from "./components/Guest/NavBar"
import { Signup } from "./components/Guest/Signup"

export default function App() {
  return ( 
    <BrowserRouter>
      <div className="w-screen h-screen bg-yellow-100"> 
        <div className="">
          <NavBar />
        </div>
        <div className="h-5/6 flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <Routes>
              <Route index />
              <Route path="login" element={<Login />}/>
              <Route path="signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}