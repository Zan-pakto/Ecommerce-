import { Profile } from "./Profile";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center space-x-6 lg:w-[40%] md:w-[60%] justify-start">
          <div className="hidden lg:block">
            <img src="./th.jpeg" className="w-16 ml-4" alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4 ">
            <h1 className="font-semibold cursor-pointer hover:text-slate-700">
              Men
            </h1>
            <h1 className="font-semibold cursor-pointer hover:text-slate-700">
              Women
            </h1>
            <h1 className="font-semibold cursor-pointer hover:text-slate-700">
              Kids
            </h1>
            <h1 className="font-semibold cursor-pointer hover:text-slate-700">
              Home & Living
            </h1>
            <h1 className="font-semibold cursor-pointer hover:text-slate-700">
              Beauty
            </h1>
          </div>
        </div>
        <div className="flex items-center md:w-[35%] w-full justify-end gap-6">
          <Search />
          <Profile />
        </div>
      </div>
    </div>
  );
};
