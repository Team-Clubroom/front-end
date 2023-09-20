/* plugin imports */
import {BrowserRouter, Route, Routes,} from "react-router-dom"; /* component imports */
import LoginPage from "./pages/content/login/login.page.tsx";
import ApplicationPage from "./pages/root/application.page.tsx";
import LandingPage from "./pages/content/landing/landing.page.tsx";
import SignupPage from "./pages/content/signup/signup.page.tsx";
import AppMainPage from "./pages/content/app-main/app-main.page.tsx";
import {NavbarComponent} from "./components/navbar/navbar.component.tsx";
import FooterComponent from "./components/footer/footer.component.tsx";
import ErrorPage from "./pages/misc/error/error.page.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<ApplicationPage />} />
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/appmain" element={<AppMainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <FooterComponent page={"landing"} />
    </BrowserRouter>
  );
}
