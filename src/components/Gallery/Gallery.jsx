import AddImage from "./AddImage";
import ImageItem from "./ImageItem";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const Gallery = ({ images, selectedImages, handleImageSelect, setImages }) => {
  // SWAP IMAGE AND UPDATE
  const handleImageReorder = (draggedImageId, targetImageId) => {
    const updatedImages = [...images];

    const draggedIndex = updatedImages.findIndex(
      (image) => image.id === +draggedImageId
    );

    const targetIndex = updatedImages.findIndex(
      (image) => image.id === +targetImageId
    );

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const [draggedImage] = updatedImages.splice(draggedIndex, 1);

      updatedImages.splice(targetIndex, 0, draggedImage);

      setImages(updatedImages);
    }
  };

  // UPLOAD IMAGE
  const handleUploadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        url: URL.createObjectURL(file),
        isFeatured: true,
      };
      setImages([...images, newImage]);
    }
  };

  //AUTO ANIMATED HOOK
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <div className="md:grid grid-cols-5 gap-4 md:mx-8" ref={parent}>
      {images?.map((image, index) => (
        <div
          className={`${
            index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
          }`}
          key={image.id}
        >
          <ImageItem
            index={index}
            image={image}
            isSelected={selectedImages.includes(image.id)}
            onImageSelect={handleImageSelect}
            onReorder={handleImageReorder}
          />
        </div>
      ))}

      <AddImage handleUploadImage={handleUploadImage} />
    </div>
  );
};

export default Gallery;
