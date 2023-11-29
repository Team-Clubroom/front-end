/* plugin imports */
import {BrowserRouter, Route, Routes,} from "react-router-dom"; /* component imports */
import LoginPage from "./pages/login/login.page.tsx";
import LandingPage from "./pages/landing/landing.page.tsx";
import {NavbarComponent} from "./components/navbar/navbar.component.tsx";
import PrivateRouteComponent from "./components/private-route/private-route.component.tsx";
import Employers from "./pages/employers/employers.component.tsx";
import SignupPage from "./pages/signup/signup.page.tsx";
import {ReactFlowGraphComponent} from "./pages/content/app-main/tabs/react-flow/react-flow-graph.component.tsx";
import {SessionTimeout} from "./pages/session-timeout/session-timeout.component.tsx";
import ErrorPage from "./pages/404/error.page.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route element={<PrivateRouteComponent />}>
          {/*  private routes go here */}
          <Route path={"/employers"} element={<Employers />} />
          <Route
            path={"/graph/:employerId"}
            element={<ReactFlowGraphComponent />}
          />
        </Route>
        {/*  public routes go here */}
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/timeout" element={<SessionTimeout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
