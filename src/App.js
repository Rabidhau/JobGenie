import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import { useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { Footer, Header,Help } from "./components";

import { Auth, CreateJob, Home, IndividualJob, Login, SignUp, Profile,About } from "./pages";
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to set authentication to true upon successful sign-in
  const handleSignInSuccess = () => {
    setIsAuthenticated(true);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
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
      element: <Login  onSignInSuccess={handleSignInSuccess}/>,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
    {
      path: "/create-job",
      element: <CreateJob onSignInSuccess={handleSignInSuccess}/>,
    },
    {
      path: "/authentication",
      element: <Auth onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/user-profile",
      element: <Profile onSignInSuccess={handleSignInSuccess}/>,
    },
    {
    
      path: "/job/:id",
      element: <IndividualJob />,
    },
  ]);

  return (
    <>
      <MantineProvider>
        <Notifications position="top-right" />
        <Header isAuthenticated={isAuthenticated} />
        <RouterProvider router={router} />{" "}
        {/* Moved this inside MantineProvider */}
        <Footer />
      </MantineProvider>
    </>
  );
  
}

export default App;
