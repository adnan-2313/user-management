import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="font-spaceGrotesk text-[4rem]  flex-col flex justify-center text-center  mt-[5rem] items-center max-md:text-[3rem] max-sm:text-[2rem]">
      Welcome To
      <span>User' Management App</span>
      <button
        className="text-[1.5rem] max-md:mt-[2rem] max-md:p-[10px] max-md:text-[0.8rem] p-[20px] rounded-md bg-black animate-bounce text-white"
        onClick={() => navigate("/")}
      >
        Let's Start
      </button>
    </main>
  );
};

export default Home;
