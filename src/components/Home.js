import React from "react";
import TimedImageGallery from "./TimedImageGallery";

const imageUrls = [
  "/img1.webp",
  "/img2.jpeg",
  "/img3.png",
  "/img4.png",
  // ... more image URLs
];

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to KayanPack</h1>
      <p style={{ marginBottom: "20px", alignContent: "center" }}>
        Your reliable source for corrugated cardboard.
      </p>
      <TimedImageGallery images={imageUrls} interval={5000} />

      {/* Brief About Us Section */}
      <section>
        <h2>About Us</h2>
        <p>
          At KayanPack, we specialize in providing top-quality corrugated
          cardboard solutions. Located in the industrious 10th of Ramadan City,
          Egypt, we are proud to offer products that are both eco-friendly and
          tailor-made to meet our clients' diverse needs. With years of
          experience, state-of-the-art technology, and a commitment to
          sustainability, we stand as a leader in the packaging industry.
        </p>
      </section>
    </div>
  );
};

export default Home;
