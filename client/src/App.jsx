import NavBar from "./Components/NavBar";
import Dashboard from "./Pages/Dashboard";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="font-quicksand p-10 bg-grey min-h-screen text-blue-900">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
