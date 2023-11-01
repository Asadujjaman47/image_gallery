import { useState } from "react";
import Header from "./Header";
import imageData from "../image_data";

const Home = () => {
  const [images, setImages] = useState(imageData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  const handleDelete = () => {
    const updatedImages = images.filter(
      (img) => !selectedImages.includes(img.id)
    );
    setImages(updatedImages);
    selectedImages([]);
    setIsDeleteButtonVisible(false);
  };

  return (
    <div>
      <Header selectedImages={selectedImages} handleDelete={handleDelete} />
      {images.map((img) => (
        <img key={img.id} src={img.url} />
      ))}
    </div>
  );
};

export default Home;
