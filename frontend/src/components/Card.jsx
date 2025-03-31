import { useNavigate } from "react-router-dom";

export const Card = ({ name, dressname, price }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/description", {
          state: { name: name, dressname: dressname, price: price },
        });
      }}
      className=" cursor-pointer flex flex-col w-[16%] border border-gray-300 rounded-lg shadow-md overflow-hidden hover:scale-110 hover:shadow-2xl"
    >
      <div className="w-full h-full">
        <img
          src={name}
          className="w-full h-full object-cover"
          alt="Product Image"
        />
      </div>
      <div className=" fles flex-col p-2 bg-white">
        <h1 className="font-bold text-gray-700 ">{dressname}</h1>
        <h1 className="font-bold text-black text-xl">{price}</h1>
      </div>
    </div>
  );
};
