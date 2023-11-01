import React, { useState } from "react";

const ImageItem = ({ image, isSelected }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative border-2 border-gray-300 group md:flex items-center justify-center ${
        isSelected ? "border-blue-500" : isHovered ? "filter brightness-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`object-cover w-full h-full ${
          isSelected ? "filter brightness-75" : ""
        }`}
        src={image.url}
        alt={image.id}
      />
    </div>
  );
};

export default ImageItem;
