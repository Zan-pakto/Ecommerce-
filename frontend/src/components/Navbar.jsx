import { Profile } from "./Profile";
import { Search } from "./Search";

export const Navbar = () => {
  return (
    <div className="bg-white shadow-md w-full">
      <div className="flex flex-wrap items-center justify-between p-2">
        <div className="flex items-center space-x-6 lg:w-[40%] md:w-[60%] justify-start">
          <div className="hidden lg:block">
            <img
              src="./th.jpeg"
              className="w-16 ml-4 cursor-pointer"
              alt="Logo"
            />
          </div>

          <div className="hidden md:flex space-x-4">
            {[
              {
                name: "Men",
                items: ["Shirts", "Jeans", "Shoes", "Accessories"],
              },
              { name: "Women", items: ["Dresses", "Tops", "Footwear", "Bags"] },
              { name: "Kids", items: ["Toys", "Clothing", "Footwear"] },
              {
                name: "Home & Living",
                items: ["Furniture", "Decor", "Kitchenware"],
              },
              { name: "Beauty", items: ["Makeup", "Skincare", "Haircare"] },
            ].map((category) => (
              <div key={category.name} className="relative group">
                <h1 className="font-semibold cursor-pointer hover:text-slate-700">
                  {category.name}
                </h1>

                {/* Dropdown List (Visible on Hover) */}
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-lg p-2 w-40 z-50">
                  {category.items.map((item) => (
                    <p
                      key={item}
                      className="text-sm hover:bg-gray-100 p-2 rounded-md cursor-pointer"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Search & Profile */}
        <div className="flex items-center md:w-[35%] w-full justify-end gap-6">
          <Search />
          <Profile />
        </div>
      </div>
    </div>
  );
};
