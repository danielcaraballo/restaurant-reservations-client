import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

const Register = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField label="Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <TextField label="Confirm Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>Register</Button>
    </Container>
  );
};

export default Register;