import { Link } from "react-router-dom";
import { Button, Container, Typography } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Typography variant="h2">Welcome to My App</Typography>
      <Button variant="contained" color="primary" component={Link} to="/login">
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/register"
      >
        Register
      </Button>
    </Container>
  );
};

export default App;
