import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer, Header} from "./components";
import { Home, Login, SignUp } from "./pages";
import Help from "./components/Help";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/help",
      element: <Help />,
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
