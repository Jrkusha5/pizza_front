import { Box, Button as MuiButton } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({ title, path }) => {
  return (
    // <Box>
    <NavLink
      to={path}
      color="inherit"
      style={{
        backgroundColor: "#FF890F",
        color: "white",
        padding: "10px 20px",
        width: "6rem",
        borderRadius: "15px",
        alignItems:"center"
      }}
    >
      {title}
    </NavLink>
    // </Box>
  );
};

export default Button;
