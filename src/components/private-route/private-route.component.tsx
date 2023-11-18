import { useAuthContext } from "../../contexts/auth/auth.context.tsx";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRouteComponent() {
  const user = useAuthContext();
  if ((user as unknown as string) === "timeout") {
    return <Navigate to={"/timeout"} />;
  } else if (user === null) {
    return <Navigate to={"/login"} />;
  } else return <Outlet />;
}

export default PrivateRouteComponent;
