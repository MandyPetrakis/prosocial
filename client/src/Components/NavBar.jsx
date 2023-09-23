import { NavLink } from "react-router-dom";

export default function NavBar(){
const activeStyle = "underline underline-offset-2"
const inactiveStyle = "hover:text-purple-300"

return (
    <div className="mx-20 mb-10 ">
      <div className="flex justify-between w-full ">
        <NavLink className={(navData) =>
              navData.isActive ? activeStyle : inactiveStyle
            }
            to="/dashboard">Dashboard</NavLink>
        <NavLink className={(navData) =>
              navData.isActive ? activeStyle : inactiveStyle
            }
            to="/Contacts">Contacts</NavLink>
        <NavLink className={(navData) =>
              navData.isActive ? activeStyle : inactiveStyle
            }
            to="/reminders">Reminders</NavLink>
        <NavLink className={(navData) =>
              navData.isActive ? activeStyle : inactiveStyle
            }
            to="/reports">Reports</NavLink>
            </div>
            <div className="absolute bg-purple-300 h-10 w-10 p-2 rounded-full text-center top-8 right-5">
        <NavLink 
            to="/account">AP</NavLink>
            </div>
    </div>
)
}