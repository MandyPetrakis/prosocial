import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import { useCurrentUser } from "./Store/userStore";
import { useEffect, useState } from "react";
import { useRequestProcessor } from "./requestProcessor";

function App() {
  const setUser = useCurrentUser((state) => state.setUser);
  const { query } = useRequestProcessor();

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

  if (currentUserQuery.isSuccess) {
    setUser(currentUserQuery.data);
  }

  if (currentUserQuery.isLoading || currentUserQuery.isError) {
    return (
      <div className="font-quicksand p-10 bg-background min-h-screen text-blue-900">
        <Authentication />
      </div>
    );
  }

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
