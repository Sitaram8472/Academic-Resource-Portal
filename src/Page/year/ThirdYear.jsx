import React from "react";
import { Link } from "react-router-dom";

const ThirdYear = () => {
  const contents = [
    { path: "/thirdyearcontent", label: "Third Year Content" }
  ];

  return (
    <div>
      <div>
        {contents.map((content, idx) => (
          <Link to={content.path} key={idx}>
            {content.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ThirdYear;
