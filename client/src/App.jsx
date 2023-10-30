import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import { useUser } from "./Store/userStore";
import { useContacts } from "./Store/contactsStore";

import { useRequestProcessor } from "./requestProcessor";

function App() {
  const { query } = useRequestProcessor();
  const setUser = useUser((state) => state.setUser);
  const setContacts = useContacts((state) => state.setContacts);

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
  setContacts(currentUserQuery.data.contacts);

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
