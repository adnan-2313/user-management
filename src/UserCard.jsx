import { useLocation } from "react-router-dom";
const UserCard = () => {
  const location = useLocation();
  const { state } = location;
  const { name, address, id, phone, username, website, email } = state.user;
  console.log(state.user);
  return (
    <section className="flex justify-center items-center ">
      <div className="flex justify-center items-center ">
        <div className="m-10 max-w-sm">
          <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 rounded-full">
              {/* <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span> */}
              <img
                className="mx-auto h-auto w-full rounded-full"
                src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
                alt=""
              />
            </div>
            <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
              {name}
            </h1>
            <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
              {email}
            </h3>
            <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
              {address.city} {address.street} {address.suite} {address.zipcode}
            </p>
            <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
              <li className="flex items-center py-3 text-sm">
                <span>Phone</span>
                <span className="ml-auto">
                  {/* <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700"> */}
                    {phone}
                  {/* </span> */}
                </span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span>website</span>
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
