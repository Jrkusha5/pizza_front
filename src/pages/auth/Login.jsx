import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
  FormGroup,
  Stack,
  Alert,
} from "@mui/material";
import pizzaLogo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CUSTOMER_LOGIN_REQUEST } from "../../redux/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { customer, error, loading } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(CUSTOMER_LOGIN_REQUEST(formData));
  // }, [dispatch]);

  // console.log("logged:", customer);

  // Handle change in input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       dispatch(CUSTOMER_LOGIN_REQUEST(formData));
      // localStorage.setItem("customer-login", JSON.stringify(customer.token));
      localStorage.setItem("logedin-data", JSON.stringify(customer.user));
   console.log("logged:", customer,customer.success);
      if (customer.success =="Success") {
        navigate("/customer-order");
      }
    } catch (error) {
      console.log(error);
    }
  };




  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flex: 1,
        gap: 14,
        height: "100vh",
        width: "100%",
        padding: 0,
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          backgroundColor: "#FF9921",
          display: "flex",
          alignItems: "center",
          padding: 20,
        }}
      >
        <img
          src={pizzaLogo}
          alt="Pizza Logo"
          style={{ width: 300, height: "auto" }}
        />
      </Box>
      {/* Right Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 4,
          alignItems: "start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
          }}
        >
          <img
            src={pizzaLogo}
            alt="Pizza Logo"
            style={{ width: 100, height: "auto" }}
          />
          <Typography
            variant="h6"
            sx={{ color: "#c1660c", fontWeight: "bold" }}
          >
            Pizza
          </Typography>
        </Box>
        {error && !loading && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{error}</Alert>
          </Stack>
        )}
        <Typography
          variant="h6"
          sx={{
            color: "#c1660c",
            fontWeight: "bold",
            borderBottom: 1,
            borderColor: "gray",
            width: "100%",
            padding: 2,
          }}
        >
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormGroup
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: "white",
            }}
          >
            <TextField
              label="Email"
              type="email"
              name="email"
              required
              fullWidth
              onChange={handleChange}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              required
              fullWidth
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox required />}
              label="I accept the terms and conditions"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ backgroundColor: "#FF9921" }}
            >
              Login
            </Button>
            <Typography textAlign="center">
              Already have an account?{" "}
              <Link
                href="/register"
                underline="hover"
                sx={{ color: "#FF9921" }}
              >
                Sign up
              </Link>
            </Typography>
          </FormGroup>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
