import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import { useEffect, useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Footer, Header, Help } from "./components";

import {
  About,
  AppliedCandidates,
  Auth,
  Candidate,
  CreateJob,
  Home,
  IndividualJob,
  Login,
  Profile,
  SignUp,
} from "./pages";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated in local storage
    const storedIsAuthenticated = localStorage.getItem("isAuthenticated");
    if (storedIsAuthenticated === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Function to set authentication to true upon successful sign-in
  const handleSignInSuccess = () => {
    setIsAuthenticated(true);
    // Store authentication status in local storage
    localStorage.setItem("isAuthenticated", "true");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/help",
      element: <Help />,
    },

    {
      path: "/login",
      element: <Login onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/create-job",
      element: <CreateJob onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/authentication",
      element: <Auth onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/user-profile",
      element: <Profile onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/job/:id",
      element: <IndividualJob />,
    },
    {
      path: "/candidate",
      element: <Candidate onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/applied-candidate/:id",
      element: <AppliedCandidates />,
    },
  ]);

  return (
    <>
      <MantineProvider>
        <Notifications position="top-right" />
        <Header isAuthenticated={isAuthenticated} />
        <RouterProvider router={router} />
        <Footer />
      </MantineProvider>
    </>
  );
}

export default App;
