import React, { useState } from "react";

const ImageItem = ({ image, isSelected, onImageSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    onImageSelect(image);
  };
  return (
    <div
      className={`relative border-2 border-gray-300 group md:flex items-center justify-center ${
        isSelected ? "border-blue-500" : isHovered ? "filter brightness-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(isHovered || isSelected) && (
        <input
          className="md:absolute top-2 left-2 z-10 mt-8 ml-5 sm:w-5 sm:h-5"
          type="checkbox"
          onChange={handleCheckboxChange}
        />
      )}

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
