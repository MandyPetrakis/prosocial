import React from "react";
import App from "./App.jsx";
import Contacts from "./Pages/Contacts.jsx";
import Account from "./Pages/Account.jsx";
import Communities from "./Pages/Communities.jsx";
import Group from "./Pages/Group.jsx";
import CommunityManager from "./Pages/CommunityManager.jsx";
import { groupLoader } from "./Pages/Group.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/communities",
        element: <Communities />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/groups/:group_id",
        element: <Group />,
        loader: groupLoader,
      },
      {
        path: "/community_manager",
        element: <CommunityManager />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
