import { useAuthContext } from "../../../../contexts/auth/auth.context.tsx";

function Dashboard() {
  const user = useAuthContext();

  return (
    <div>
      <h1>Private Dashboard</h1>
      <p>Welcome {user.email}</p>
    </div>
  );
}

export default Dashboard;
