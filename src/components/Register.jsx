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
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

import imgLogin from "../assets/imageLogin.png";
import logo from "../assets/logo.png";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (setter) => (e) => setter(e.target.value);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        { username, email, password },
        { headers: { "Content-Type": "application/json" } },
      );
      setSuccess("Usuario creado exitosamente");
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
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
            padding: "50px 100px",
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

          <TextField
            label="Username"
            type="text"
            value={username}
            onChange={handleChange(setUsername)}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Email address"
            type="email"
            value={email}
            onChange={handleChange(setEmail)}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handleChange(setPassword)}
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Container
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
          </Container>

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
