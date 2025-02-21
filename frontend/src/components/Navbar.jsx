import { Profile } from "./Profile";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="main flex flex-wrap items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-6 lg:w-[40%] md:w-[60%] w-full justify-start">
        <div className="lg:">
          <img src="./th.jpeg" className="w-16 ml-4" alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-4">
          <h1 className="font-semibold cursor-pointer">Men</h1>
          <h1 className="font-semibold cursor-pointer">Women</h1>
          <h1 className="font-semibold cursor-pointer">Kids</h1>
          <h1 className="font-semibold cursor-pointer">Home & Living</h1>
          <h1 className="font-semibold cursor-pointer">Beauty</h1>
        </div>
      </div>

      <div className="flex items-center md:w-[35%] w-full mt-2 md:mt-0 justify-end gap-6">
        <Search />
        <Profile />
      </div>
    </div>
  );
};
