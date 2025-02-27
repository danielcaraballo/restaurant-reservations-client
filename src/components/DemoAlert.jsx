import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutline";
import PropTypes from "prop-types";

const DemoAlert = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          p: 4,
          overflow: "hidden",
        }}
      >
        <CheckCircleOutlineOutlinedIcon
          sx={{
            fontSize: "100px",
            color: "#229954",
            mb: 1,
          }}
        />
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, color: "#229954", mb: 0 }}
        >
          Confirmed
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "rgba(0,0,0,.7)", mb: 3 }}
        >
          Booking #0001
        </Typography>

        <Alert severity="info" sx={{ width: "100%", mb: 2 }}>
          <strong>This is a demo version.</strong> No real reservations have
          been made.
        </Alert>

        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ width: "100%", backgroundColor: "#ff5722" }}
        >
          CLOSE
        </Button>
      </DialogContent>
    </Dialog>
  );
};

DemoAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DemoAlert;
