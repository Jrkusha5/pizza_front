import React, { useState } from "react";
import CardComponent from "./CardComponent";
import { Box, Typography } from "@mui/material";
import restorantImage from "../assets/images/Ellipse 8.png";
import { styled } from "@mui/system";

// CustomDot for dot styling
const CustomDot = styled("div")(({ active }) => ({
  width: 20,
  height: 20,
  borderRadius: "50%",
  backgroundColor: active ? "orange" : "gray",
  display: "inline-block",
  margin: "0 5px",
}));

// Sample card data
const cardData = [
  {
    image: restorantImage,
    name: "John Doe",
    orders: "2K",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    image: restorantImage,
    name: "Jane Smith",
    orders: "1.5K",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: restorantImage,
    name: "Alice Johnson",
    orders: "3K",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: restorantImage,
    name: "Bob Brown",
    orders: "1K",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    image: restorantImage,
    name: "Charlie Green",
    orders: "1.2K",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: restorantImage,
    name: "Diana Prince",
    orders: "900",
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra.",
  },
];

const TopRestaurants = () => {
  const [activeSlide, setActiveSlide] = useState(0); // Track active slide
  const totalSlides = cardData.length;

  // Function to handle dot click
  const handleDotClick = (index) => {
    setActiveSlide(index);
  };

  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #FEF2E6, #fee5cb,#FEF2E6)",
        padding: "40px",
      }}
    >
      <Typography variant="h3" sx={{ color: "gray", marginBottom: "1.5rem" }}>
        Top Restaurants
      </Typography>
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "10px" }}>
          {cardData.map((card, index) => (
            <Box
              key={index}
              sx={{
                width: "500px",
                height: "200px",
                flexShrink: 0,
                transition: "transform 0.5s ease",
                transform: index === activeSlide ? "scale(1)" : "scale(0.9)",
              }}
            >
              <CardComponent
                image={card.image}
                name={card.name}
                orders={card.orders}
                description={card.description}
              />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Dots navigation */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {cardData.map((_, index) => (
          <CustomDot
            key={index}
            active={index === activeSlide}
            onClick={() => handleDotClick(index)}
            style={{ cursor: "pointer" }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TopRestaurants;
