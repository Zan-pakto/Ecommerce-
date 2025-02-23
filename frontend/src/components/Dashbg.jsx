import { useEffect, useState } from "react";

export const Dashbg = () => {
  const arr = [
    "/main.avif",
    "/main2.avif",
    "/main3.avif",
    "/main4.avif",
    "/main5.avif",
    "/main6.avif",
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
