import React, { useState } from 'react';
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
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import logo from '../assets/logo.png'

const OrangeButton = styled(Button)({
  backgroundColor: '#FF6600',
  color: 'white',
  '&:hover': {
    backgroundColor: '#FF8C00',
  },
});

const OrangeStepper = styled(Stepper)({
  '& .MuiStepIcon-root.Mui-active': {
    color: '#FF6600',
  },
  '& .MuiStepIcon-root.Mui-completed': {
    color: '#FF6600',
  },
});

export default function Component() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    area: '',
    guests: '',
  });

  const steps = ['Customer information', 'Booking information', 'Confirm reservation'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const BookingForm = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              margin="normal"
            />
          </>
        );
      case 1:
        return (
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField
              label="Select Date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              InputLabelProps={{ shrink: true }}
            />
            <FormControl fullWidth>
              <InputLabel id="time-select-label">Select Time</InputLabel>
              <Select
                labelId="time-select-label"
                id="time-select"
                name="time"
                value={formData.time}
                label="Select Time"
                onChange={handleInputChange}
              >
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="area-select-label">Area</InputLabel>
              <Select
                labelId="area-select-label"
                id="area-select"
                name="area"
                value={formData.area}
                label="Area"
                onChange={handleInputChange}
              >
                <MenuItem value="Balcony">Balcony</MenuItem>
                <MenuItem value="Indoor">Indoor</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="guests-select-label">Number of guests</InputLabel>
              <Select
                labelId="guests-select-label"
                id="guests-select"
                name="guests"
                value={formData.guests}
                label="Number of guests"
                onChange={handleInputChange}
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <MenuItem key={num} value={num}>{num}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>Reservation Summary</Typography>
            <Typography>Name: {formData.name}</Typography>
            <Typography>Email: {formData.email}</Typography>
            <Typography>Date: {formData.date}</Typography>
            <Typography>Time: {formData.time}</Typography>
            <Typography>Area: {formData.area}</Typography>
            <Typography>Guests: {formData.guests}</Typography>
          </Box>
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Grid sx={{ marginBottom: '30px' }}>
            <img src={logo} sx={{ with: '10%', marginBottom: '10px' }} />
        </Grid>
      
      <Card sx={{ maxWidth: 600, width: '100%', boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Booking Form
          </Typography>
          
          <OrangeStepper activeStep={activeStep} alternativeLabel sx={{ marginBottom: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </OrangeStepper>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ minHeight: '200px' }}>
            {BookingForm(activeStep)}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
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
                  RESERVE
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
      
      <Typography variant="body2" sx={{ marginTop: 4, color: 'text.secondary' }}>
        ©2024 Reservations - By Dev. Project
      </Typography>
    </Box>
  );
}