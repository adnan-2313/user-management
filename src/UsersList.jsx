import { useEffect, useState } from "react";
import axios from "axios";
import { CiUser, CiMail, CiLocationOn } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Users = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState([]);
  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => setError(err.message));
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <section className="w-full p-[80px_80px] mx-auto max-w-[1300px]">
      <div className="flex flex-col gap-5 font-DMSANS">
        {users.map((user) => {
          const { id, name, username, email, address } = user;
          return (
            <div
              key={id}
              className="w-[90%] text-gray-800 flex justify-between  p-[20px] shadow-[0px_-2px_10px_rgba(0,0,0,0.15)] rounded-[10px]"
              onClick={() => navigate("/user", { state: { user } })}
            >
              <div className="w-[80%]">
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
                <button>
                  <TbEdit />
                </button>
                <button>
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
