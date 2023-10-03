import { NavLink } from "react-router-dom";

export default function NavBar() {
  const activeStyle = "underline underline-offset-2";
  const inactiveStyle = "hover:text-purple";

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
          to="/groups"
        >
          Groups
        </NavLink>
        <div className="bg-purple h-10 w-10 p-2 rounded-full text-center">
          <NavLink to="/account">AP</NavLink>
        </div>
      </div>
    </div>
  );
}
