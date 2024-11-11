import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ToDoList from "./ToDoList.jsx";
import LogIn from "./LogIn.jsx";
import ProtectedRoute from "./routers/protectedRoute.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <ToDoList/>
        </ProtectedRoute>
      ),
    },
    {
      path: '/login',
      element: <LogIn/>,
    }
  ])

  return (<RouterProvider router={router}/>)
}

export default App
