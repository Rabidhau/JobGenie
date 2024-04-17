import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Login, SignUp } from "./pages";
import { useState } from 'react';
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
      path: "/login",
      element: <Login onSignInSuccess={handleSignInSuccess} />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);

  return (
    <>
      <Header isAuthenticated={isAuthenticated} />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
