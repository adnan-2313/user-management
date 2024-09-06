const Navbar = () => {
  return (
    <header className="flex bg-[#080808e8] text-white flex-row mx-auto justify-center w-full shadow-md items-center p-[20px_50px]">
      <div className="flex justify-between w-full max-w-[1200px]">
        <div className="text-[1.2rem] font-playwrite">user-management</div>
        <nav className="">
          <ul className="flex flex-row gap-8 items-center text-[1.2rem] font-montserrat font-medium ">
            <li>HOME</li>
            <li>USERS</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
