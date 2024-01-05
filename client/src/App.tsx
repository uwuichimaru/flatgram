import { Login } from "./pages/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/register";
import { Initial } from "./pages/initial";
import { Paths } from "./paths";
import { Auth } from "./features/auth/auth";

const router = createBrowserRouter([
  {
    path: Paths.PATH_LOGIN,
    element: <Login />,
  },
  {
    path: Paths.PATH_REGISTER,
    element: <Register />,
  },
  {
    path: Paths.PATH_CHAT,
    element: <Initial />,
  },
]);

const App = () => {
  return (
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  );
};

export default App;
