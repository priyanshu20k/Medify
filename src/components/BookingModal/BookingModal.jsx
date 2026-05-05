import { useState } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { format } from "date-fns";

export function BookingModal({
  open,
  setOpen,
  bookingDetails,
  showSuccessMessage,
}) {
  const [email, setEmail] = useState("");

  const triggerEvent = () => {
    window.dataLayer = window.dataLayer || [];

    function triggerFirstVisitEvent() {
      window.dataLayer.push({
        event: "first_visit",
        eventDate: new Date().toISOString(),
      });
    }

    triggerFirstVisitEvent();
  };

  const handleBooking = (e) => {
    e.preventDefault();
    triggerEvent();

    const existingBookings = JSON.parse(
      localStorage.getItem("medify_bookings") || "[]"
    );

    localStorage.setItem(
      "medify_bookings",
      JSON.stringify([
        ...existingBookings,
        { ...bookingDetails, bookingEmail: email },
      ])
    );
    
    showSuccessMessage(true);
    setEmail("");
    setOpen(false);
  };

  const formatDate = (day) => {
    if (day) {
      const date = new Date(day);
      return format(date, "E, d LLL");
    } else {
      return null;
    }
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          width: "95%",
          maxWidth: 600,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          boxShadow: 24,
          p: { xs: 3, md: 4 },
          outline: 0,
          bgcolor: "#fff",
          borderRadius: 2,
        }}
      >
        <Typography component="h3" variant="h3" sx={{ mb: 2 }}>
          Confirm booking
        </Typography>
        <Typography sx={{ fontSize: 14, mb: 3 }}>
          <Box component="span">
            Please enter your email to confirm booking for{" "}
          </Box>
          <Box component="span" sx={{ fontWeight: 600 }}>
            {`${bookingDetails.bookingTime} on ${formatDate(
              bookingDetails.bookingDate
            )}`}
          </Box>
        </Typography>
        <form onSubmit={handleBooking}>
          <Stack sx={{ alignItems: "flex-start" }} spacing={2}>
            <TextField
              type="email"
              label="Enter your email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Stack direction="row" spacing={1}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                disableElevation
              >
                Confirm
              </Button>
              <Button
                variant="outlined"
                size="large"
                disableElevation
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
