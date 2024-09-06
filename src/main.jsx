import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./Components/UsersList.jsx";
import UserCard from "./Components/UserCard.jsx";
import AddUser from "./Components/AddUser.jsx";
import Home from "./Components/Home.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Users />,
      },
      {
        path: "/user",
        element: <UserCard />,
      },
      {
        path: "/userform",
        element: <AddUser />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
