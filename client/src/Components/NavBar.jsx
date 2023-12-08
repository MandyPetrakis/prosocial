import { NavLink } from "react-router-dom";
import { useUser } from "../Store/userStore";

export default function NavBar() {
  const activeStyle = "underline underline-offset-2";
  const inactiveStyle = "hover:text-purple";
  const user = useUser((state) => state.user);

  return (
    <div className="mx-20 mb-10 ">
      <div className="flex justify-between w-full ">
        <NavLink
          className={(navData) =>
            navData.isActive ? activeStyle : inactiveStyle
          }
          to="/Contacts"
        >
          Contacts
        </NavLink>
        <NavLink
          className={(navData) =>
            navData.isActive ? activeStyle : inactiveStyle
          }
          to="/communities"
        >
          Communities
        </NavLink>
        <div className="bg-purple h-10 w-10 p-2 rounded-full font-semibold text-center">
          <NavLink to="/account">
            {/* {user !== "" ? (
              <div>
                {user.first_name.charAt(0)} {user.last_name.charAt(0)}{" "}
              </div>
            ) : null} */}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
