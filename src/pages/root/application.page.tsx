import { Navigate, Outlet } from "react-router-dom";

function ApplicationPage() {
  const applicationPage: string =
    "w-screen h-screen flex flex-col items-center justify-center";

  return (
    <div className={applicationPage}>
      {<Outlet /> || <Navigate to="/home" />}
    </div>
  );
}

export default ApplicationPage;