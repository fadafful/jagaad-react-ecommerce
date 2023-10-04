import { useAuth } from "../hooks/UseAuth";

export default function Dashboard() {
  const [isAuthenticated] = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    window.location = "/";
  };

  return (
    isAuthenticated && (
      <>
        Welcome to Dashboard! <button onClick={handleLogout}>Log out</button>
      </>
    )
  );
}
