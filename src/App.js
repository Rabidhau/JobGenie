import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Login } from "./pages";
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
