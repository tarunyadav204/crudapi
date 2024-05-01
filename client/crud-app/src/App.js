
import './App.css';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import User from './Components/GetUser/user.jsx';
import Add from "./Components/AddUser/Add.jsx";
import Edit from "./Components/UpdateUser/Edit.jsx";
function App() {

  const route = createBrowserRouter([
    {
      path : "/",
      element :<User/>,
    },
    {
      path : "/add",
      element : <Add/>,
    },
    {
      path : "/edit/:id",
      element : <Edit/>,
    }
  ])

  return (
    <div className="App">
    <RouterProvider router = {route}></RouterProvider>
    </div>
  );
}

export default App;
