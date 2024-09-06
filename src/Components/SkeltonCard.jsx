// UserCardSkeleton.jsx
const UserCardSkeleton = () => {
  return (
    <section className="flex justify-center items-center font-montserrat animate-pulse">
      <div className="flex justify-center items-center mt-6">
        <div className="m-10 max-w-sm">
          <div className="rounded-lg border bg-gray-200 px-4 pt-8 pb-10 shadow-lg">
            <div className="relative mx-auto w-36 h-36 bg-gray-300 rounded-full"></div>
            <h1 className="my-2 h-6 w-2/3 mx-auto bg-gray-300 rounded"></h1>
            <h3 className="h-5 w-1/2 mx-auto bg-gray-300 rounded"></h3>
            <p className="mt-2 h-4 w-3/4 mx-auto bg-gray-300 rounded"></p>
            <ul className="mt-4 divide-y bg-gray-200 py-2 px-3 text-gray-600 shadow-sm">
              <li className="flex items-center py-3 text-sm">
                <span className="h-4 w-20 bg-gray-300 rounded"></span>
                <span className="ml-auto h-4 w-32 bg-gray-300 rounded"></span>
              </li>
              <li className="flex items-center py-3 text-sm">
                <span className="h-4 w-20 bg-gray-300 rounded"></span>
                <span className="ml-auto h-4 w-24 bg-gray-300 rounded"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCardSkeleton;
