import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./UsersList.jsx";
import UserCard from "./UserCard.jsx";
import AddUser from "./AddUser.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
