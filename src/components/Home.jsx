import { useState } from "react";
import imageData from "../image_data";

const Home = () => {
  const [images, setImages] = useState(imageData);

  return (
    <div>
      {images.map((img) => (
        <img key={img.id} src={img.url} />
      ))}
    </div>
  );
};

export default Home;
