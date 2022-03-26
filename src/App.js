import Card from "./components/Card";
import image from "./images/photo-1453728013993-6d66e9c9123a.jpg";
import image_2 from "./images/lasy_logo.png";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([
    {
      image: image,
      title: "Picture 1",
    },
    {
      image: image_2,
      title: "Picture 2",
    },
  ]);
  return (
    <div>
      {
        images.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))
      }
    </div>
  );
}

export default App;
