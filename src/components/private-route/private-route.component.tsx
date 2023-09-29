import { useAuthContext } from "../../contexts/auth/auth.context.tsx";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteComponent() {
  const user = useAuthContext();
  return user ? <Outlet /> : <Navigate to={"/login"} />;
}

export default PrivateRouteComponent;
