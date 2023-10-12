import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import { useCurrentUser } from "./Store/userStore";
import { useRequestProcessor } from "./requestProcessor";

function App() {
  const { query } = useRequestProcessor();
  const setUser = useCurrentUser((state) => state.setUser);
  const setContacts = useCurrentUser((state) => state.setContacts);
  const user = useCurrentUser((state) => state.user);

  const currentUserQuery = query(
    ["currentUser"],
    async () => {
      const response = await fetch("/api/me");
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    { retry: false }
  );

  if (!currentUserQuery.isSuccess) {
    return (
      <div className="font-quicksand p-10 bg-background min-h-screen text-blue-900">
        <Authentication />
      </div>
    );
  }

  setUser(currentUserQuery.data);
  setContacts(user.contacts);

  return (
    <div className="font-quicksand p-10 bg-background min-h-screen text-blue-900">
      <>
        <NavBar />
        <Outlet />
      </>
    </div>
  );
}

export default App;
