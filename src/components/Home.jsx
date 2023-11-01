import { useState } from "react";
import Header from "./Header";
import imageData from "../image_data";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  const [images, setImages] = useState(imageData);
  const [selectedImages, setSelectedImages] = useState([]);
  const [isDeleteButtonVisible, setIsDeleteButtonVisible] = useState(false);

  const handleImageSelect = (image) => {
    // console.log(image);

    if (selectedImages.includes(image.id)) {
      setSelectedImages(selectedImages.filter((id) => id !== image.id));
    } else {
      setSelectedImages([...selectedImages, image.id]);
    }
  };

  const handleDelete = () => {
    const updatedImages = images.filter(
      (image) => !selectedImages.includes(image.id)
    );
    setImages(updatedImages);
    selectedImages([]);
    setIsDeleteButtonVisible(false);
  };

  return (
    <div>
      <Header selectedImages={selectedImages} handleDelete={handleDelete} />
      <Gallery
        images={images}
        selectedImages={selectedImages}
        handleImageSelect={handleImageSelect}
        setImages={setImages}
      />
    </div>
  );
};

export default Home;
