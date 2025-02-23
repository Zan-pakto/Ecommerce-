import { useEffect, useState } from "react";

export const Dashbg2 = () => {
  const arr = [
    "/men1.avif",
    "/men2.avif",
    "/men3.avif",
    "/men4.avif",
    "/men5.avif",
    "/men7.avif",
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center ">
      <img
        src={arr[index]}
        className="w-[90%] transition-all duration-500 "
        alt="Slideshow"
      />
    </div>
  );
};
