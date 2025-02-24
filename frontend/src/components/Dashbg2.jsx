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
