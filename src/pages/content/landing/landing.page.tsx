import { Navigate } from "react-router-dom";
import MaintenancePage from "../../misc/maintenance/maintenance.page.tsx";

function LandingPage() {
  // TODO: Replace with actual auth state
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <Navigate to="/appmain" />;
  }

  // TODO: Replace with actual landing page once discussed with team
  return <MaintenancePage />;
}

export default LandingPage;
