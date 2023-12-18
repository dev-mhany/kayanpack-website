import React from "react";
import TimedImageGallery from "./TimedImageGallery";

const imageUrls = [
  "/img1.webp",
  "img2.jpeg",
  "/img3.png",
  "/img4.png",
  // ... more image URLs
];
const Home = () => {
  return (
    <div>
      <h1>Welcome to KayanPack</h1>
      <p>Your reliable source for corrugated cardboard.</p>
      <TimedImageGallery images={imageUrls} interval={5000} />
    </div>
  );
};

export default Home;
