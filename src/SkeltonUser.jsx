// SkeletonUsersList.jsx
const SkeletonUsersList = () => {
  // Array to simulate multiple skeleton cards
  const skeletonArray = Array.from({ length: 5 });

  return (
    <section className="w-full p-[80px_80px] mx-auto max-w-[1300px]">
      <div className="flex flex-col gap-5 font-DMSANS">
        {skeletonArray.map((_, index) => (
          <div
            key={index}
            className="w-[90%] flex justify-between p-[20px] shadow-[0px_-2px_10px_rgba(0,0,0,0.15)] rounded-[10px] animate-pulse bg-gray-100"
          >
            <div className="w-[80%] space-y-2">
              <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
              <div className="flex gap-4">
                <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-6 w-6 bg-gray-300 rounded-full animate-puls"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full animate-puls"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkeletonUsersList;
