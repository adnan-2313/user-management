import { useLocation, useNavigate } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import SkeltonCard from "./SkeltonCard"; // Ensure the path is correct

const UserCard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const user = state?.user; // Optional chaining to avoid errors

  // Check if user data is available, if not render SkeltonCard
  if (!user) {
    return <SkeltonCard />;
  }

  const { name, address, id, phone, username, website, email } = user;

  return (
    <section className="flex flex-col items-center font-montserrat">
      <button
        className="mt-[20px] font-medium h-[30px] flex justify-center items-center p-[15px] shadow-lg text-[2rem] text-white rounded-md bg-[#1d1a1a] hover:bg-gray-800 transition-colors"
        onClick={() => navigate(-1)} // Navigates back to the previous page
        title="Go Back"
      >
        <IoReturnUpBack />
      </button>
      <div className="flex justify-center items-center mt-6">
        <div className="m-10 max-w-sm">
          <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
              <img
                className="mx-auto h-auto w-full rounded-full"
                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                alt={name}
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/150")
                }
              />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
              {name}
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
              {email}
            </h3>
            <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
              {`${address.city}, ${address.street}, ${address.suite}, ${address.zipcode}`}
            </p>
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Phone</span>
                <span className="ml-auto">{phone}</span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>Website</span>
                <span className="ml-auto">{website}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
