import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate, Link } from "react-router-dom";

import imgLogin from "../assets/imageLogin.png";
import logo from "../assets/logo.png";
import { login } from "../services/authService";

const DEMO_CREDENTIALS = {
  username: "demoUser",
  password: "demoPass",
};

const Login = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!identifier.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    // Modo demo: Validar credenciales estáticas
    if (
      identifier === DEMO_CREDENTIALS.username &&
      password === DEMO_CREDENTIALS.password
    ) {
      navigate("/booking");
      return;
    }

    try {
      await login(identifier, password);
      navigate("/booking");
    } catch (err) {
      if (err.response?.status === 401) {
        setError("Incorrect credentials.");
      } else {
        setError("An error occurred. Please try again.");
      }
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
              textAlign: "left",
              paddingBottom: "10px",
            }}
          >
            Login into Reservations
          </Typography>

          {/* ALERTA DE ERROR */}
          {error && (
            <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            <TextField
              label="Email or username"
              type="text"
              variant="outlined"
              margin="normal"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ marginTop: "20px", backgroundColor: "rgb(255, 87, 34)" }}
            >
              SIGN IN
            </Button>
          </form>
        </Container>
        <Box>
          <Box display="flex" justifyContent="center" marginTop="20px">
            <Typography variant="body2">
              Do you have an account?{" "}
              <Link
                to="register/"
                color="primary"
                style={{
                  color: "rgb(255, 87, 34)",
                  textDecoration: "none",
                }}
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ marginTop: "auto", textAlign: "center" }}>
          <Typography variant="body2" align="center" color="textSecondary">
            ©2024 Reservations - By Dev. Project
          </Typography>
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

export default Login;
