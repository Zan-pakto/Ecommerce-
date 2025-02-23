export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white text-center p-4 mt-6 flex justify-center  gap-2 ">
      <p className="text-xl font-bold mt-3">Shahi's </p>
      <img
        className="cursor-pointer"
        src="./github.svg"
        onClick={() => {
          window.open("https://github.com/Zan-pakto", "_blank");
        }}
      ></img>
      <img
        className="cursor-pointer"
        src="./linkedin.svg"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/arvind-shahi-1504bb22b/",
            "_blank"
          );
        }}
      ></img>
    </footer>
  );
};
