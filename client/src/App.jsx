import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import { useCurrentUser } from "./Store/userStore";
import { useEffect, useState } from "react";
import api from "./Api/api";
import { CurrentUser } from "./Api/users";

function App() {
  const setUser = useCurrentUser((state) => state.setUser);
  const [isUserValid, setIsUserValid] = useState(false);

  // const getCurrentUser = async () => {
  //   try {
  //     const response = await api.get("/me");
  //     setUser(response.data);
  //     setIsUserValid(true);
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   const { data } = CurrentUser();
  //   if (data) {
  //     setUser(data);
  //     setIsUserValid(true);
  //   }
  // }, []);

  return (
    <div className="font-quicksand p-10 bg-grey min-h-screen text-blue-900">
      {isUserValid ? (
        <>
          <NavBar />
          <Outlet />
        </>
      ) : (
        <Authentication setIsUserValid={setIsUserValid} />
      )}
    </div>
  );
}

export default App;
