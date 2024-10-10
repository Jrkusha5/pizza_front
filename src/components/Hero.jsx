import { Box, Typography, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import pizzaImage from "../assets/images/image.png";

const Hero = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(to bottom, #FEF2E6, #FFDDBB,#FEF2E6)",
          padding: "70px 30px",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          justifyContent: "space-between", // Add this to push the image to the end
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "400px", md: "600px" },
          }}
        >
          <Typography variant="h1" sx={{ color: "#FF890F", font: "bold" }}>
            Order us
          </Typography>
          <Typography variant="body1">
            In publishing and graphics design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without.
          </Typography>
          <Box sx={{ width: { xs: "100%", sm: "40rem" } }}>
            <TextField
              placeholder="Search"
              sx={{
                backgroundColor: "#FFFFFF",
                color: "gray",
                borderRadius: "20px",
                marginTop: "50px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  "&:focus": {
                    outline: "none",
                  },
                },
                width: { xs: "100%", sm: "20rem" },
              }}
            />
            <Box
              sx={{
                backgroundColor: "#FF890F",
                borderRadius: "50px",
                padding: "15px",
                position: "relative",
                width: "20px",
                height: "20px",
                top: "-3.3rem",
                left: { xs: "calc(100% - 2.5rem)", sm: "16.9rem" },
              }}
            >
              <SearchIcon sx={{ color: "white", textAlign: "center" }} />
            </Box>
          </Box>
        </Box>

        {/* Adjust the image container to make it stick to the end */}
        <Box
          component="img"
          src={pizzaImage}
          alt="hero Image"
          sx={{
            maxWidth: "50%", // Set the max width for the image
            height: "auto",  // Maintain aspect ratio
            objectFit: "contain", // Ensure the image fits well
          }}
        />
      </Box>
    </>
  );
};

export default Hero;
