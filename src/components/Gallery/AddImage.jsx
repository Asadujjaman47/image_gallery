import React from "react";
import { ImImage } from "react-icons/im";

const AddImage = ({ handleUploadImage }) => {
  return (
    <label className="md:flex flex-col items-center justify-center border-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />

      <span className="text-2xl">
        <ImImage />
      </span>
      <h1 className="text-2xl p-4">Add Image</h1>
    </label>
  );
};

export default AddImage;
