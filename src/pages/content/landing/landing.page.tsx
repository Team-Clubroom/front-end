import { Navigate } from "react-router-dom";
import MaintenancePage from "../../misc/maintenance/maintenance.page.tsx";
import FooterComponent from "../../../components/footer/footer.component.tsx";

function LandingPage() {
  // TODO: Replace with actual auth state
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <Navigate to="/appmain" />;
  }

  // TODO: Replace with actual landing page once discussed with team
  return (
    <>
      <MaintenancePage />
      <FooterComponent />
    </>
  );
}

export default LandingPage;
