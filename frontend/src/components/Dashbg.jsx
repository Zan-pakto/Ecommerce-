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
  }, [arr.length]);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <div className="relative w-[90%] overflow-hidden mx-auto">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {arr.map((src, i) => (
          <img
            key={i}
            src={src}
            className="w-full flex-shrink-0"
            alt={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {arr.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === i ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
