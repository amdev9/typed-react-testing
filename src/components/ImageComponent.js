import React from "react";

const ImageComponent = ({ size }) => {
  return (
    <img
      src={`https://www.example.com/image-${size}.png`}
      alt={`The image alt tag for the ${size} image`}
    />
  );
};

export default ImageComponent;
