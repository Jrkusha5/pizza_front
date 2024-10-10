import { Box, Typography, Avatar, Button } from "@mui/material";
import React from "react";
//  import Button from "./Button";
import { useNavigate } from 'react-router-dom';

const PizzaCard = ({ pizza, user }) => {
  const navigate = useNavigate()

  const handleOrderClick = () => {
   localStorage.setItem("pizza-data", JSON.stringify(pizza));
    const isAuthenticated = !!localStorage.getItem("customer-login");
    //  console.log("logedin customerrr:", isAuthenticated);

   if (isAuthenticated) {
     navigate("/customer-order");
   } else {
     navigate("/login"); 
   }
  };
  // console.log("pizzzz:",pizza)
   const imageUrl = pizza.photo
     ? `http://localhost:4000/${pizza.photo.replace(/\\/g, "/")}`
     : "http://localhost:4000/uploads/placeholder.png";
  
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: 4,
        borderRadius: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "190px",
          height: "180px",
          backgroundColor: "#FBE0C1",
          borderRadius: 50,
        }}
      >
        <Avatar
          src={imageUrl}
          sx={{ width: "85%", height: "85%", alignSelf: "center" }}
        />
      </Box>

      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", color: "#000000", fontWeight: "bold" }}
        >
          {pizza.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", color: "#404040" }}
        >
          {pizza.toppings.join(", ")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: 1,
          borderBottomColor: "gray",
          padding: 2,
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ textAlign: "center", mt: 1, color: "#01C550", fontSize: 25 }}
        >
          {pizza.price}{" "}
          <Typography
            variant="body2"
            component="span"
            sx={{ verticalAlign: "super", fontSize: "0.8rem", color: "#000" }}
          >
            Birr
          </Typography>
        </Typography>
        {/* <Box> */}
        <Button
          color="inherit"
          sx={{
            backgroundColor: "#FF890F",
            color: "white",
            padding: "10px 20px",
            width: "6rem",
            borderRadius: "15px",
            alignItems: "center",
          }}
          onClick={handleOrderClick}
        >Order</Button>
        {/* </Box> */}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          padding: 2,
          justifyContent: "space-between",
        }}
      >
        <Avatar src={pizza.ownerImage} sx={{ width: 34, height: 34, mr: 1 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: "#404040", fontWeight: "bold", fontSize: 20 }}
        >
          {pizza.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default PizzaCard;
