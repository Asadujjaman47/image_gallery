import ImageItem from "./ImageItem";

const Gallery = ({ images, selectedImages, handleImageSelect, setImages }) => {
  const handleImageReorder = (draggedImageId, targetImageId) => {
    const updatedImages = [...images];

    const draggedIndex = updatedImages.findIndex(
      (image) => image.id === +draggedImageId
    );

    const targetIndex = updatedImages.findIndex(
      (images) => images.id === +targetImageId
    );

    if (draggedIndex !== -1 && targetIndex !== -1) {
      const [draggedImage] = updatedImages.splice(draggedIndex, 1);

      updatedImages.splice(targetIndex, 0, draggedImage);
    }

    setImages(updatedImages);
  };

  return (
    <div className="md:grid grid-cols-5 gap-4 md:mx-8">
      {images?.map((image, index) => (
        <div
          className={`${
            index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
          }`}
          key={image.id}
        >
          <ImageItem
            image={image}
            isSelected={selectedImages.includes(image.id)}
            onImageSelect={handleImageSelect}
            onReorder={handleImageReorder}
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
