import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import SignIn from "./components/LoginForm/signIn";
import SignUp from "./components/LoginForm/signUp";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/SignIn",
    element: (
      <div className="signin">
        <SignIn />
      </div>
    ),
  },
  {
    path: "/SignUp",
    element: (
      <div className="signup">
        <SignUp />
      </div>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
