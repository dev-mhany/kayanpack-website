import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

// Array of product information
const products = [
  { name: "3 Ply Corrugated Box", img: "/3ply-corrugated-300x126.png" },
  { name: "5 Ply Corrugated Box", img: "/5ply-corrugated-300x126.png" },
  {
    name: "Die Cut Box",
    img: "/die-cut-corrugated-boxes-trident-pbi-1-300x225.jpg",
  },
  { name: "Custom Printed Corrugated Box", img: "/New-Project-280x300.png" },
  { name: "White Boxes", img: "/white-corrugated-boxes-300x225.jpg" },
  {
    name: "Multi Depth Boxes",
    img: "/multi-depth-corrugated-box-3-300x300.jpg",
  },
];

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: "20px" }}>
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                padding: "10px",
                textAlign: "center",
                height: "100%", // Make sure the height is 100% for alignment
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", // Distribute space evenly within the column
              }}
            >
              <Box
                sx={{
                  height: "200px", // Fixed height for image container
                  width: "100%", // Full width
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden", // Hide overflow
                }}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain", // Maintain aspect ratio within container
                  }}
                />
              </Box>
              <Typography variant="subtitle1">{product.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
