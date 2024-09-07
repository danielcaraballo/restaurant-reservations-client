import React from 'react';
import { Container, Box, Typography, TextField, Button, Link, colors } from '@mui/material';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import imgLogin from '../assets/imageLogin.png'
import logo from '../assets/logo.png'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Register = () => {
  return (
    <Grid
      container
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {/* Left side - Login Form */}
      <Grid item xs={12} md={5}>
        <Container
          className='container-form-login'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'end',
            alignItems: 'center',
            padding: '0 70px',
          }}
        >
          <Grid>
            <img src={logo} sx={{ with: '10%' }} />
          </Grid>
          <Typography variant="h6"
            gutterBottom
            sx={{
              color: 'rgba(0,0,0,.7)',
              width: '100%',
              borderBottom: '1px solid rgba(0,0,0,.2)',
              fontWeight: '500'
            }}
          >
            Create account
          </Typography>

          <TextField
            label="Name"
            type="text"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <TextField
            label="Email address"
            type="email"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Checkbox {...label} />
            <Typography sx={{color: 'rgba(0,0,0,.5)'}}>
            I agree to the Terms & Conditions
            </Typography>
          </Container>

          <Button
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            style={{ marginTop: '20px', background: 'rgb(255, 87, 34)' }}
          >
            CREATE ACCOUNT
          </Button>
        </Container>
        <Box>
          <Box display="flex" justifyContent="center" marginTop="20px">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="/" 
                    color="primary" 
                    style={{ color: 
                    'rgb(255, 87, 34)', 
                    textDecoration: 'none' }}>
                Sing in
              </Link>
            </Typography>
          </Box>

          <Box>
            <Typography variant="body2"
                        align="center" 
                        color="textSecondary"
                        
                        >
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
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Register;