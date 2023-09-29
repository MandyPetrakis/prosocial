import NavBar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import useUser from "./Store/userStore";

function App() {
  const isUserValid = useUser((state) => state.isUserValid);

  return (
    <div className="font-quicksand p-10 bg-grey min-h-screen text-blue-900">
      {isUserValid ? (
        <>
          <NavBar />
          <Outlet />
        </>
      ) : (
        <Authentication />
      )}
    </div>
  );
}

export default App;
