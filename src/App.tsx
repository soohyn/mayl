import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";

function App() {


  const router = createBrowserRouter([
    { path: "/", Component: Home},
    { path: "sign-in", Component: SignIn },
    { path: "sign-up", Component: SignUp },
  ]);
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
