import { Card } from "../components/Card";
import { Dashbg } from "../components/Dashbg";
import { Dashbg2 } from "../components/Dashbg2";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const DashBoard = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="mb-3">
        <Navbar />
      </div>
      <div className="mt-2 ">
        <Dashbg />
      </div>

      <div className="text-center pt-2 flex justify-center">
        <div className="flex gap-2 p-4">
          <h1 className="text-5xl font-bold text-slate-800">
            Trending Settings
          </h1>
          <h1 className="text-5xl font-bold text-slate-600">Categories</h1>
        </div>
      </div>

      <div className=" flex md:flex gap-4 justify-center mb-3">
        <Card
          name={"./card.jpg"}
          dressname={" Eterna Long dress Black"}
          price={"$99.00"}
        />
        <Card
          name={"./card2.jpg"}
          dressname={"Spark dress party Night green"}
          price={"$199.00"}
        />
        <Card
          name={"./card3.jpg"}
          dressname={"Alinch Night Dress navy"}
          price={"$169.00"}
        />
        <Card
          name={"./card4.jpg"}
          dressname={"Meena dress maroon"}
          price={"$189.00"}
        />
        <Card
          name={"./card6.jpg"}
          dressname={"Scarlet Red Long Dress"}
          price={"$999.00"}
        />
      </div>

      <div className="flex justify-center gap-2">
        <h1 className="text-center text-5xl font-bold text-slate-800 pb-2 mb-2 mt-5">
          Men's Style
        </h1>
        <h1 className="text-5xl font-bold text-slate-600 pb-2 mb-2 mt-5">
          Trendings .....
        </h1>
      </div>

      <div className="mb-2 p-2">
        <Dashbg2 />
      </div>

      <div className="flex gap-4 justify-center mb-3 mt-4">
        <Card
          name={"./cm1.avif"}
          dressname={"Formal Wears"}
          price={"$399.00"}
        />
        <Card name={"./cm2.avif"} dressname={"Casual wears"} price={"$99.00"} />
        <Card
          name={"./cm3.avif"}
          dressname={"Classy Wears"}
          price={"$199.00"}
        />
        <Card name={"./cm4.avif"} dressname={"Genz"} price={"$99.00"} />
        <Card
          name={"./cm6.avif"}
          dressname={"Traditional Wears"}
          price={"$499.00"}
        />
      </div>

      <Footer />
    </div>
  );
};
