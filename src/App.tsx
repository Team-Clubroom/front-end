/* plugin imports */
import {BrowserRouter, Route, Routes,} from "react-router-dom"; /* component imports */
import LoginPage from "./pages/content/login/login.page.tsx";
import LandingPage from "./pages/content/landing/landing.page.tsx";
import SignupPage from "./pages/content/signup/signup.page.tsx";
import DashboardPage from "./pages/content/app-main/dashboard.page.tsx";
import {NavbarComponent} from "./components/navbar/navbar.component.tsx";
import ErrorPage from "./pages/misc/error/error.page.tsx";
import PrivateRouteComponent from "./components/private-route/private-route.component.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<PrivateRouteComponent />}>
          {/*  private routes go here */}
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        {/*  public routes go here */}
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
