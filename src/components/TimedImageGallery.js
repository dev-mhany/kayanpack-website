import React, { useState, useEffect } from "react";
import { Paper } from "@mui/material";

function TimedImageGallery({ images, interval = 3000 }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <Paper
      elevation={4}
      style={{
        marginTop: "50px",
        width: "50%",
        height: "300px", // Fixed height
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Prevents overflow if the image is too large
      }}
    >
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        style={{
          maxHeight: "100%", // Limits the image height to the Paper's height
          maxWidth: "100%", // Limits the image width to the Paper's width
          width: "auto", // Adjusts width to maintain aspect ratio
          height: "auto", // Adjusts height to maintain aspect ratio
          objectFit: "contain", // Ensures the entire image fits within the bounds without stretching
        }}
      />
    </Paper>
  );
}

export default TimedImageGallery;
