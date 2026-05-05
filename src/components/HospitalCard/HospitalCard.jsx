import icon from "../../assets/hospitalicon.png";
import { Box, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import thumb from "../../assets/thumbsup.png";
import { Calendar } from "../Calendar/Calendar";
import { useState } from "react";
import { format } from "date-fns";

export function HospitalCard({
  details,
  availableSlots,
  handleBooking,
  booking = false,
}) {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box sx={{ borderRadius: 2, bgcolor: "#fff", p: { xs: 2, md: 4 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        sx={{
          spacing: { xs: 1, md: 4 },
          flexWrap: "wrap",
        }}
      >
        <Box
          component="img"
          src={icon}
          sx={{
            width: { xs: 64, md: 130 },
            height: "auto",
            flexShrink: 0,
            alignSelf: "start",
            objectFit: "contain",
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography
            component="h3"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: { xs: 18, md: 20 },
              mb: 1,
              textTransform: "capitalize",
              lineHeight: 1,
            }}
          >
            {details["Hospital Name"].toLowerCase()}
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              color: "#414146",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {`${details["City"].toLowerCase()}, ${details["State"]}`}
          </Typography>
          <Typography sx={{ fontSize: 14, mb: 1 }}>
            {details["Hospital Type"]}
          </Typography>
          <Stack
            direction="row"
            sx={{ flexWrap: "wrap", spacing: "4px", mb: 2 }}
          >
            <Typography
              component="span"
              sx={{
                fontWeight: 800,
                textTransform: "uppercase",
                color: "primary.green",
              }}
            >
              Free
            </Typography>
            <Typography
              component="span"
              sx={{
                textDecoration: "line-through",
                color: "#787887",
                mx: "4px",
              }}
            >
              ₹500
            </Typography>
            <Typography component="span">Consultation fee at clinic</Typography>
          </Stack>
          <Divider sx={{ borderStyle: "dashed", mb: 2 }} />
          <Stack
            direction="row"
            sx={{
              alignItems: "center",
              bgcolor: "primary.green",
              py: "4px",
              px: 1,
              borderRadius: 1,
              width: "fit-content",
              gap: "4px",
            }}
          >
            <Box
              component={"img"}
              src={thumb}
              sx={{
                width: { xs: 16, md: 20 },
                height: { xs: 16, md: 20 },
              }}
            />
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xs: 14, md: 16 },
                color: "#fff",
                opacity: 0.8,
              }}
            >
              {details["Hospital overall rating"] === "Not Available"
                ? 0
                : details["Hospital overall rating"]}
            </Typography>
          </Stack>
        </Box>

        <Stack
          sx={{
            justifyContent: booking ? "flex-start" : "flex-end",
            minWidth: "23%",
          }}
        >
          {!booking && (
            <>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "primary.green",
                  fontSize: 14,
                  fontWeight: 500,
                  mb: 1,
                }}
              >
                Available Today
              </Typography>
              <Button
                variant="contained"
                disableElevation
                onClick={() => setShowCalendar((prev) => !prev)}
              >
                {!showCalendar
                  ? "Book FREE Center Visit"
                  : "Hide Booking Calendar"}
              </Button>
            </>
          )}

          {booking && (
            <Stack direction="row" spacing={1} sx={{ mt: { xs: 2, md: 0 } }}>
              <Chip
                label={details.bookingTime}
                variant="outlined"
                color="primary"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
              <Chip
                label={format(new Date(details.bookingDate), "dd MMMM yyyy")}
                variant="outlined"
                color="success"
                sx={{
                  borderRadius: 1,
                  fontSize: 14,
                }}
              />
            </Stack>
          )}
        </Stack>
      </Stack>

      {showCalendar && (
        <Calendar
          details={details}
          availableSlots={availableSlots}
          handleBooking={handleBooking}
        />
      )}
    </Box>
  );
}
