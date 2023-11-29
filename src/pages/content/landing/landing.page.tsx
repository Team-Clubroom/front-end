import { Navigate } from "react-router-dom";
import MaintenancePage from "../../misc/maintenance/maintenance.page.tsx";
import FooterComponent from "../../../components/footer/footer.component.tsx";
import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";

function LandingPage() {
  const user = useAuthContext();

  if (user) {
    return <Navigate to="/employers" />;
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
