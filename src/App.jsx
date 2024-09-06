import Users from "./Components/UsersList";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
