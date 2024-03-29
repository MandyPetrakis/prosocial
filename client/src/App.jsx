import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Authentication from "./Pages/Authentication";
import { useUser } from "./Store/userStore";
import { useCommunities } from "./Store/communityStore";
import { useRequestProcessor } from "./requestProcessor";
import { useContacts } from "./Store/contactsStore";

function App() {
  const { query } = useRequestProcessor();
  const setUser = useUser((state) => state.setUser);
  const user = useUser((state) => state.user);
  const setContacts = useContacts((state) => state.setContacts);
  const setCommunities = useCommunities((state) => state.setCommunities);

  const currentUserQuery = query(
    ["currentUser"],
    async () => {
      const response = await fetch("/api/me");
      if (!response.ok) {
        throw new Error("Unauthorized");
      }
      return response.json();
    },
    {
      retry: false,
      onSuccess: (data) => {
        setUser(data);
        setCommunities(data.tags);
        setContacts(data.contacts);
      },
    }
  );

  if (!currentUserQuery.isSuccess || user === "") {
    return (
      <div className="font-quicksand bg-background text-blue-900 w-screen h-screen">
        <LandingPage />
      </div>
    );
  }

  return (
    <div className="font-quicksand p-10 bg-background min-h-screen text-blue-900 w-full h-full">
      <>
        <NavBar />
        <Outlet />
      </>
    </div>
  );
}

export default App;
