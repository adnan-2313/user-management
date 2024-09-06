import { useEffect, useState } from "react";
import axios from "axios";
import { CiUser, CiMail, CiLocationOn } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import SkeltonUser from "./SkeltonUser"; // Make sure SkeltonUser is implemented correctly

const API_URL = "https://jsonplaceholder.typicode.com";

const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users`);
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/users/${id}`);
      // Refresh the user list after deletion
      fetchUsers();
    } catch (err) {
      console.error(err);
      alert("Failed to delete user");
    }
  };

  // Display Skeleton while loading
  if (loading) {
    return <SkeltonUser />;
  }

  // Display Error Message if there's an error
  if (error) {
    return (
      <div className="text-center text-red-500 font-bold mt-10">
        Failed to load users: {error}
      </div>
    );
  }

  return (
    <section className="w-full p-[80px_80px] mx-auto max-w-[1300px] font-DMSANS">
      <div className="flex flex-row mb-[50px] justify-between w-[90%]">
        <h2 className="text-[2rem] font-medium">User's List</h2>
        <button
          className="bg-black text-white px-[20px] rounded-[7px] text-[1.2rem]"
          onClick={() => navigate("/userform")}
        >
          Add Users
        </button>
      </div>
      <div className="flex flex-col gap-5">
        {users.map((user) => {
          const { id, name, username, email, address, phone } = user;
          return (
            <div
              key={id}
              className="w-[90%] text-gray-800 flex justify-between p-[20px] shadow-[0px_-2px_10px_rgba(0,0,0,0.15)] rounded-[10px] cursor-pointer"
            >
              <div
                className="w-[80%]"
                onClick={() => navigate("/user", { state: { user } })}
                title="See details"
              >
                <h2 className="text-[1.5rem] font-medium">{name}</h2>
                <div className="flex flex-row justify-between">
                  <span className="flex justify-center gap-2 text-[1rem] items-center">
                    <CiUser />
                    {username}
                  </span>
                  <span className="flex justify-center gap-2 text-[1rem] items-center">
                    <CiMail />
                    {email}
                  </span>
                  <span className="flex justify-center gap-2 text-[1rem] items-center">
                    <CiLocationOn />
                    {address.city}
                  </span>
                </div>
              </div>
              <div className="text-[1.6rem] flex flex-col gap-3">
                <button
                  onClick={() =>
                    navigate("/userform", { state: { name, phone, email, id } })
                  }
                  title="Edit"
                >
                  <TbEdit />
                </button>
                <button
                  title="Delete"
                  onClick={() => handleDelete(id)} // Use an arrow function to avoid immediate execution
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Users;
