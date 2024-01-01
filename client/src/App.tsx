import { Login } from "./pages/login"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Register } from "./pages/register"
import { Initial } from "./pages/initial"
import { Paths } from './paths'

const router = createBrowserRouter([
  {
    path: Paths.PATH_LOGIN,
    element: <Login />,
  },
  {
    path: Paths.PATH_REGISTER,
    element: <Register />
  },
  {
    path: Paths.PATH_CHAT,
    element: <Initial />
  }
])


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App