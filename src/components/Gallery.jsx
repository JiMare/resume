import React, { useState } from "react";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onSelectImage = (event) => {
    if (selectedImage === event.target.id) {
      setSelectedImage(null);
    } else {
      setSelectedImage(event.target.id);
    }
  };
  return (
    <div className="gallery">
      <img
        id="1"
        src="/certificates/coder.jpg"
        alt="certificate"
        onClick={onSelectImage}
        className={selectedImage === "1" && "img"}
      />
      <img
        id="2"
        src="/certificates/html_css_2.jpg"
        alt="certificate"
        onClick={onSelectImage}
        className={selectedImage === "2" && "img"}
      />
      <img
        id="3"
        src="/certificates/javascript_2.jpg"
        alt="certificate"
        onClick={onSelectImage}
        className={selectedImage === "3" && "img"}
      />
      <img
        id="4"
        src="/certificates/react_girls.jpg"
        alt="certificate"
        onClick={onSelectImage}
        className={selectedImage === "4" && "img"}
      />
      <img
        id="5"
        src="/certificates/testing.jpg"
        alt="certificate"
        onClick={onSelectImage}
        className={selectedImage === "5" && "img"}
      />
    </div>
  );
};
