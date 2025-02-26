import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Step,
  Stepper,
  StepLabel,
  FormHelperText,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout"; // Asegúrate de importar el icono

import logo from "../assets/logo.png";
import { logout } from "../services/authService";

const OrangeButton = styled(Button)({
  backgroundColor: "#FF6600",
  color: "white",
  "&:hover": {
    backgroundColor: "#FF8C00",
  },
});

const OrangeStepper = styled(Stepper)({
  "& .MuiStepIcon-root.Mui-active": {
    color: "#FF6600",
  },
  "& .MuiStepIcon-root.Mui-completed": {
    color: "#FF6600",
  },
});

export default function Component() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    area: "",
    guests: "",
  });

  const [errors, setErrors] = useState({
    date: "",
    time: "",
    area: "",
    guests: "",
  });

  // Datos estáticos del usuario (simulando respuesta de API)
  const [userData] = useState({
    firstName: "Daniel",
    lastName: "Caraballo",
    email: "daniel@example.com",
    phone: "+1 234 567 890",
  });

  const steps = [
    "Customer information",
    "Booking information",
    "Confirm reservation",
  ];

  const handleNext = () => {
    if (activeStep === 1) {
      // Validar solo en el paso 2 (booking information)
      const newErrors = {};
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.time) newErrors.time = "Please select a time";
      if (!formData.area) newErrors.area = "Please select an area";
      if (!formData.guests) newErrors.guests = "Please select number of guests";

      setErrors(newErrors);

      if (Object.keys(newErrors).length > 0) return;
    }

    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const BookingForm = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={2}>
              {/* Campo First Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  value={userData.firstName}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23)", // Color original
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                    },
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgba(0,0,0,.05)",
                      pointerEvents: "none", // Deshabilita cualquier interacción
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23) !important",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Campo Last Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  value={userData.lastName}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                    },
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgba(0,0,0,.05)",
                      pointerEvents: "none",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23) !important",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Campo Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={userData.email}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                    },
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgba(0,0,0,.05)",
                      pointerEvents: "none",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23) !important",
                      },
                    },
                  }}
                />
              </Grid>

              {/* Campo Phone */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Phone"
                  value={userData.phone}
                  InputProps={{
                    readOnly: true,
                    sx: {
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23)",
                      },
                    },
                  }}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgba(0,0,0,.05)",
                      pointerEvents: "none",
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 0, 0, 0.23) !important",
                      },
                    },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    color: "rgba(0,0,0,.5)",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  Not you?{" "}
                  <Button
                    onClick={handleLogout}
                    sx={{
                      color: "#FF6600",
                      textTransform: "none",
                      p: 0,
                      "&:hover": { backgroundColor: "transparent" },
                    }}
                  >
                    Switch account
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
            {/* Date Picker */}
            <FormControl fullWidth error={!!errors.date}>
              <TextField
                label="Select Date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                required
              />
              <FormHelperText>{errors.date}</FormHelperText>
            </FormControl>

            {/* Time Select */}
            <FormControl fullWidth error={!!errors.time} required>
              <InputLabel id="time-select-label">Select Time</InputLabel>
              <Select
                labelId="time-select-label"
                id="time-select"
                name="time"
                value={formData.time}
                label="Select Time"
                onChange={handleInputChange}
              >
                <MenuItem value="" disabled>
                  <em>Select time</em>
                </MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
              </Select>
              <FormHelperText>{errors.time}</FormHelperText>
            </FormControl>

            {/* Area Select */}
            <FormControl fullWidth error={!!errors.area} required>
              <InputLabel id="area-select-label">Area</InputLabel>
              <Select
                labelId="area-select-label"
                id="area-select"
                name="area"
                value={formData.area}
                label="Area"
                onChange={handleInputChange}
              >
                <MenuItem value="" disabled>
                  <em>Select area</em>
                </MenuItem>
                <MenuItem value="Balcony">Balcony</MenuItem>
                <MenuItem value="Indoor">Indoor</MenuItem>
              </Select>
              <FormHelperText>{errors.area}</FormHelperText>
            </FormControl>

            {/* Guests Select */}
            <FormControl fullWidth error={!!errors.guests} required>
              <InputLabel id="guests-select-label">Number of guests</InputLabel>
              <Select
                labelId="guests-select-label"
                id="guests-select"
                name="guests"
                value={formData.guests}
                label="Number of guests"
                onChange={handleInputChange}
              >
                <MenuItem value="" disabled>
                  <em>Select guests</em>
                </MenuItem>
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <MenuItem key={num} value={num}>
                    {num}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>{errors.guests}</FormHelperText>
            </FormControl>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Grid container spacing={3}>
              {/* Columna Izquierda - Detalles en 2 columnas */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={3}>
                  {/* Columna 1 */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <CalendarMonthIcon
                          sx={{
                            color: "#FF6600",
                            fontSize: "28px",
                            flexShrink: 0,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "rgba(0,0,0,.5)", fontWeight: 500 }}
                          >
                            Date
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: "rgba(0,0,0,.8)" }}
                          >
                            {formData.date}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <AccessTimeIcon
                          sx={{
                            color: "#FF6600",
                            fontSize: "28px",
                            flexShrink: 0,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "rgba(0,0,0,.5)", fontWeight: 500 }}
                          >
                            Time
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: "rgba(0,0,0,.8)" }}
                          >
                            {formData.time}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  {/* Columna 2 */}
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                    >
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <PermIdentityIcon
                          sx={{
                            color: "#FF6600",
                            fontSize: "28px",
                            flexShrink: 0,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "rgba(0,0,0,.5)", fontWeight: 500 }}
                          >
                            Guests
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: "rgba(0,0,0,.8)" }}
                          >
                            {formData.guests}
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <TableRestaurantOutlinedIcon
                          sx={{
                            color: "#FF6600",
                            fontSize: "28px",
                            flexShrink: 0,
                          }}
                        />
                        <Box>
                          <Typography
                            variant="body2"
                            sx={{ color: "rgba(0,0,0,.5)", fontWeight: 500 }}
                          >
                            Area
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{ color: "rgba(0,0,0,.8)" }}
                          >
                            {formData.area}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "rgba(34, 153, 84, 0.1)",
                    borderRadius: 2,
                    padding: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#229954",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                          lineHeight: 1.2,
                          mb: 1,
                        }}
                      >
                        Confirmed
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(0,0,0,.8)",
                          fontWeight: 500,
                          fontSize: "0.9rem",
                        }}
                      >
                        Booking #25451
                      </Typography>
                    </Box>
                    <CheckCircleOutlineOutlinedIcon
                      sx={{
                        fontSize: "40px",
                        color: "#229954",
                        mt: 0.5,
                      }}
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* Mensaje inferior */}
            <Box
              sx={{
                marginTop: "24px",
                padding: "16px",
                backgroundColor: "rgba(255, 102, 0, 0.05)",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(0,0,0,.7)",
                  fontSize: "0.90rem",
                  lineHeight: 1.5,
                  textAlign: "center",
                }}
              >
                Should your plans change, please let us know. We look forward to
                serving you.
              </Typography>
            </Box>
          </Box>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ marginBottom: "30px" }}>
        <img src={logo} sx={{ with: "10%", marginBottom: "10px" }} />
      </Grid>

      <Button
        onClick={handleLogout}
        variant="outlined"
        startIcon={<LogoutIcon sx={{ fontSize: "18px" }} />}
        sx={{
          position: "fixed",
          top: 20,
          right: 20,
          color: "#FF6600",
          borderColor: "#FF6600",
          borderRadius: "8px",
          padding: "8px 16px",
          textTransform: "none",
          fontWeight: 500,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 102, 0, 0.08)",
            borderColor: "#FF8C00",
            color: "#FF8C00",
            boxShadow: "0 2px 8px rgba(255, 102, 0, 0.2)",
          },
        }}
      >
        Logout
      </Button>

      <Card sx={{ maxWidth: 700, width: "100%", boxShadow: 3 }}>
        <CardContent sx={{ padding: "70px" }}>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              color: "rgba(0,0,0,.7)",
              borderBottom: "1px solid rgba(0,0,0,.2)",
              marginBottom: "30px",
              paddingBottom: "5px",
            }}
          >
            Booking Form
          </Typography>

          <OrangeStepper
            activeStep={activeStep}
            alternativeLabel
            sx={{ marginBottom: 4 }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </OrangeStepper>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ minHeight: "200px" }}
          >
            {BookingForm(activeStep)}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 2,
              }}
            >
              <Button
                variant="contained"
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                PREVIOUS
              </Button>
              {activeStep === steps.length - 1 ? (
                <OrangeButton type="submit" variant="contained">
                  CONTINUE
                </OrangeButton>
              ) : (
                <OrangeButton variant="contained" onClick={handleNext}>
                  NEXT
                </OrangeButton>
              )}
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Typography
        variant="body2"
        sx={{ marginTop: 4, color: "text.secondary" }}
      >
        ©2024 Reservations - By Dev. Project
      </Typography>
    </Box>
  );
}
