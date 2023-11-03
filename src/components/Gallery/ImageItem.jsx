import React, { useState } from "react";

const ImageItem = ({ index, image, isSelected, onImageSelect, onReorder }) => {
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
      className={`relative border-2 rounded-xl border-gray-300 group md:flex items-center justify-center overflow-hidden cursor-pointer ${
        index === 0 ? "h-[25rem]" : "h-48"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {(isHovered || isSelected) && (
        <div
          className={`md:absolute inset-0 ${
            isSelected ? "selected-overlay" : isHovered ? "hovered-overlay" : ""
          }`}
        />
      )}
      {(isHovered || isSelected) && (
        <input
          className="md:absolute top-2 left-2 mt-2 ml-5 sm:w-5 sm:h-5 cursor-pointer"
          type="checkbox"
          checked={isSelected}
          onChange={handleCheckboxChange}
        />
      )}
      <img
        className="object-cover-fit w-full h-full"
        src={image.url}
        alt={`img ${image.id}`}
      />
    </div>
  );
};

export default ImageItem;
