import ImageItem from "./ImageItem";

const Gallery = ({ images, selectedImages }) => {
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
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
