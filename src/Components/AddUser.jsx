import { useState } from "react";
import axios from "axios";
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const AddUser = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  // Determine if we're updating an existing user
  const isUpdate = !!state?.id;

  // Set initial data based on whether we're updating or creating
  const initialData = {
    name: state?.name || "",
    phone: state?.phone || "",
    email: state?.email || "",
  };

  const [input, setInput] = useState(initialData);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = isUpdate
      ? `https://jsonplaceholder.typicode.com/users/${state.id}` // Update existing user
      : "https://jsonplaceholder.typicode.com/users"; // Add new user

    const method = isUpdate ? "PUT" : "POST";

    axios({
      method: method,
      url: url,
      data: input,
    })
      .then((res) => {
        console.log(res);
        // Reset form after submission
        setInput(initialData);
        alert(
          isUpdate ? "User updated successfully" : "User added successfully"
        );
        navigate(-1); // Navigate back after submission
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to submit form");
      });
  };

  return (
    <div className="relative flex items-center justify-center p-12 font-montserrat">
      <button
        className="absolute left-4 top-4 font-medium h-[30px] flex justify-center items-center p-[15px] shadow-lg text-[2rem] text-white rounded-md bg-[#1d1a1a] hover:bg-gray-800 transition-colors"
        onClick={() => navigate(-1)} // Navigates back to the previous page
        title="Go Back"
      >
        <IoReturnUpBack />
      </button>
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={input.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={input.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              {isUpdate ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
