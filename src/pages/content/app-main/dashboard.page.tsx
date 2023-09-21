import { useAuthContext } from "../../../contexts/auth/auth.context.tsx";

function DashboardPage() {
  const user = useAuthContext();
  return (
    <div>
      <h1>Private dashboard</h1>
      <p>Welcome {user.email}</p>
    </div>
  );
}

export default DashboardPage;
