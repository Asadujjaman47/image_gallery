import React, { useState } from "react";

const ImageItem = ({ image, isSelected, onImageSelect, onReorder }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCheckboxChange = () => {
    onImageSelect(image);
  };

  // DRAG AND DROP
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", image.id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedImageId = e.dataTransfer.getData("text/plain");
    onReorder(draggedImageId, image.id);
  };

  return (
    <div
      className={`relative border-2 border-gray-300 group md:flex items-center justify-center ${
        isSelected ? "border-blue-500" : isHovered ? "filter brightness-75" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
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
