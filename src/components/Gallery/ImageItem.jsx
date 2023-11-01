import React from "react";

const ImageItem = ({ image }) => {
  return (
    <div className="relative border-2 border-gray-300 group md:flex items-center justify-center">
      <img
        className="object-cover w-full h-full"
        src={image.url}
        alt={image.id}
      />
    </div>
  );
};

export default ImageItem;
