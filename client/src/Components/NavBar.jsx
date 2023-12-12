import { NavLink } from "react-router-dom";
import { useUser } from "../Store/userStore";

export default function NavBar() {
  const activeStyle =
    "underline text-purple underline-offset-2 font-bold text-lg";
  const inactiveStyle = "hover:text-purple font-semibold text-lg";
  const user = useUser((state) => state.user);

  return (
    <div className="mx-20 mb-10 ">
      <div className="flex justify-evenly  w-full ">
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
            {user !== "" ? (
              <div>
                {user.first_name.charAt(0)}
                {user.last_name.charAt(0)}
              </div>
            ) : null}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
