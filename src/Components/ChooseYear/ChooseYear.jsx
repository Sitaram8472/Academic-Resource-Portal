import React from "react";
import { Link } from "react-router-dom";

const ChooseYear = () => {
  const years = [
    { label: "First Year", path: "/firstyear" },
    { label: "Second Year", path: "/secondyear" },
    { label: "Third Year", path: "/thirdyearcontent" },
    { label: "Forth Year", path: "/fourthyear" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-blue-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {years.map((year, idx) => (
          <Link
            to={year.path}
            key={idx}
            className="
              bg-white 
              rounded-2xl 
              shadow-lg 
              hover:shadow-2xl 
              transform 
              hover:-translate-y-2 
              transition-all 
              duration-500 
              flex 
              items-center 
              justify-center 
              p-10 
              text-xl 
              font-semibold 
              text-green-600 
              hover:text-white 
              hover:bg-green-500
              cursor-pointer
            "
          >
            {year.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseYear;
