import React from "react";
import App from "./App.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Reminders from "./Pages/Reminders.jsx";
import Reports from "./Pages/Reports.jsx";
import Account from "./Pages/Account.jsx";
import Authentication from "./Pages/Authentication.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/reminders",
        element: <Reminders />,
      },
      {
        path: "/reports",
        element: <Reports />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
