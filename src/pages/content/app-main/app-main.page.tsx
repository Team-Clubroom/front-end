import { Navigate } from "react-router-dom";

function AppMainPage() {
  // TODO: Replace with actual auth state
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return <div>App Main</div>;
}

export default AppMainPage;