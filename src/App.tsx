/* plugin imports */
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* component imports */
import { Login } from "./components/Login/Login";
import { Signup } from "./components/Signup/Signup";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ApplicationPage } from "./pages/Route/ApplicationPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="w-max h-screen mb-[-2rem]">
        <ApplicationPage />
        <div className="w-full h-full flex justify-center items-center">
          <Routes>
            <Route index element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
