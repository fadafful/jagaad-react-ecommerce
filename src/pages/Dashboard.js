import { useAuth } from "../context/authContext";

export default function Dashboard() {
  const { signout } = useAuth();

  return (
    <>
      <h1>Welcome to Dashboard!</h1>
      <button onClick={() => signout()}>Log out</button>
    </>
  );
}
