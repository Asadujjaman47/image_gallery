import React from "react";
import { ImImage } from "react-icons/im";

const AddImage = () => {
  return (
    <label className="md:flex flex-col items-center justify-center border-4">
      <span className="text-2xl">
        <ImImage />
      </span>
      <h1 className="text-2xl p-4">Add Image</h1>
    </label>
  );
};

export default AddImage;
