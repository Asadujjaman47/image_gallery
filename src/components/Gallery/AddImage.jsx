import { ImImage } from "react-icons/im";

const AddImage = ({ handleUploadImage }) => {
  return (
    <label className="md:flex flex-col items-center justify-center border-4 cursor-pointer">
      <input
        type="file"
        accept="image/*"
        onChange={handleUploadImage}
        className="hidden"
      />

      <div className="md:flex flex-col items-center">
        <ImImage className="text-4xl" />
        <span className="text-xl mt-2">Add Images</span>
      </div>
    </label>
  );
};

export default AddImage;
