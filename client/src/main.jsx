import React from "react";
import App from "./App.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Authentication from "./Pages/Authentication";

import Contacts from "./Pages/Contacts.jsx";
import Account from "./Pages/Account.jsx";
import Communities from "./Pages/Communities.jsx";
import Community from "./Pages/Community.jsx";
import Contact from "./Pages/Contact.jsx";
import { contactLoader } from "./Pages/Contact.jsx";
import { communityLoader } from "./Pages/Community.jsx";
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
        path: "/community/:community_id",
        element: <Community />,
        loader: communityLoader,
      },
      {
        path: "/contact/:contact_id",
        element: <Contact />,
        loader: contactLoader,
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
