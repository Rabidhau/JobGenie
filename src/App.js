import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Login, SignUp } from "./pages";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);
 

  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
