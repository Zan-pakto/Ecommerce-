import { Card } from "./Card";

export const Cart = () => {
  return (
    <div>
      <div className=" flex justify-center p-2 border border-b-2">
        <h1 className="text-xl font-bold"> Shopping Cart</h1>
      </div>
      <div className=" flex justify center ">
        <div className="flex flex-col justify-center items-center">
          <div>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
};
