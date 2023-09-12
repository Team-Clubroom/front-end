import { Login } from "./components/Login"
import { NavBar } from "./components/NavBar"

export default function App() {
  return ( 
    <div className="w-screen h-screen bg-yellow-100"> 
      <div className="">
        <NavBar />
      </div>
      <div className="h-5/6 flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <Login />
        </div>
      </div>
    </div>
  )
}