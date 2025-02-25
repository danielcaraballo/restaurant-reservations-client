import { useState } from "react";
import axios from "axios";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";
// import Checkbox from "@mui/material/Checkbox";
import { useNavigate, Link } from "react-router-dom";

import imgLogin from "../assets/imageLogin.png";
import logo from "../assets/logo.png";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  // const handleChange = (setter) => (e) => setter(e.target.value);

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        {
          email,
          password,
          password_confirmation: passwordConfirmation,
          first_name: firstName,
          last_name: lastName,
          phone,
        },
        {
          headers: { "Content-Type": "application/json" },
        },
      );

      if (response.status === 201) {
        const { access } = response.data;
        localStorage.setItem("token", access); // Guarda el token
        navigate("/booking"); // Redirige al usuario después del registro
      }
    } catch (err) {
      if (err.response?.data) {
        setError(err.response.data.message || "Error in registration.");
      } else {
        setError("Error connecting to the server. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left side - Login Form */}
      <Grid item xs={12} md={5}>
        <Container
          className="container-form-login"
          component="form"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            padding: "30px 100px",
            height: "100%",
          }}
        >
          <Grid sx={{ marginBottom: "20px" }}>
            <img src={logo} sx={{ width: "120px" }} alt="Logo" />
          </Grid>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "rgba(0,0,0,.7)",
              width: "100%",
              borderBottom: "1px solid rgba(0,0,0,.2)",
              fontWeight: "500",
            }}
          >
            Create account
          </Typography>

          {/* ALERTA DE ERROR */}
          {error && (
            <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
              {error}
            </Alert>
          )}

          {/* ALERTA DE ÉXITO */}
          {success && (
            <Alert severity="success" sx={{ width: "100%", mt: 2 }}>
              {success}
            </Alert>
          )}

          {/* Nuevo Grid container para nombre y apellido */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>

          <TextField
            label="Email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          {/* Grid para contraseñas */}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Confirmation Password"
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            </Grid>
          </Grid>

          <TextField
            label="Phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          {/* <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Checkbox {...label} />
            <Typography sx={{ color: "rgba(0,0,0,.5)" }}>
              I agree to the Terms & Conditions
            </Typography>
          </Container> */}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{ marginTop: "20px", background: "rgb(255, 87, 34)" }}
          >
            {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
          </Button>
        </Container>
        <Box>
          <Box display="flex" justifyContent="center" marginTop="20px">
            <Typography variant="body2">
              Already have an account?{" "}
              <Link
                to="/"
                color="primary"
                style={{
                  color: "rgb(255, 87, 34)",
                  textDecoration: "none",
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2" align="center" color="textSecondary">
              ©2024 Reservations - By Dev. Project
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Right side - Image */}
      <Grid item xs={false} md={7}>
        <Box
          style={{
            backgroundImage: `url(${imgLogin})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Register;
