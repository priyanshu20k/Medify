import { Container, Stack, Box, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { HospitalCard } from "../../components/HospitalCard/HospitalCard";
import { HospitalSearch } from "../../components/HospitalSearch/HospitalSearch";
import { BookingModal } from "../../components/BookingModal/BookingModal";
import { SnackbarAlert } from "../../components/SnackbarAlert/SnackbarAlert";
import { Navbar } from "../../components/Navbar/Navbar";
import ctaImage from "../../assets/cta.png";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [hospitals, setHospitals] = useState([]);
  const [state, setState] = useState(searchParams.get("state"));
  const [city, setCity] = useState(searchParams.get("city"));
  const availableSlots = {
    morning: ["11:30 AM"],
    afternoon: ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"],
    evening: ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"],
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({});
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getHospitals = async () => {
      setHospitals([]);
      setIsLoading(true);
      try {
        const apiUrl = import.meta.env.VITE_API_URL || "https://meddata-backend.onrender.com";
        const response = await axios.get(
          `${apiUrl}/data?state=${state}&city=${city}`
        );
        if (Array.isArray(response.data)) {
          setHospitals(response.data);
        } else {
          console.error("API Error: Hospitals response is not an array", response.data);
          setHospitals([]);
        }
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };

    if (state && city) {
      getHospitals();
    }
  }, [state, city]);

  useEffect(() => {
    setState(searchParams.get("state"));
    setCity(searchParams.get("city"));
  }, [searchParams]);

  const handleBookingModal = (details) => {
    setBookingDetails(details);
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))",
          width: "100%",
          pl: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            height: "110px"
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              background: "#fff",
              p: 3,
              borderRadius: 2,
              transform: "translatey(50px)",
              mb: "50px",
              boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            }}
          >
            <HospitalSearch />
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, pb: 10, px: { xs: 0, md: 4 } }}>
          {hospitals.length > 0 && city && (
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h1"
                sx={{
                  fontSize: 24,
                  lineHeight: 1.1,
                  mb: 2,
                  fontWeight: 500,
                }}
              >
                {`${hospitals.length} medical centers available in `}
                <span style={{ textTransform: "capitalize" }}>
                  {city.toLocaleLowerCase()}
                </span>
              </Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <CheckCircle2 size={20} className="text-[#00A500]" />
                <Typography sx={{ color: "#787887", lineHeight: 1.4 }}>
                  Book appointments with minimum wait-time & verified doctor
                  details
                </Typography>
              </Stack>
            </Box>
          )}

          <Stack direction={{ xs: "column", md: "row" }} sx={{ alignItems: "flex-start" }}>
            <Stack
              spacing={3}
              sx={{
                mb: { xs: 4, md: 0 },
                width: { xs: "100%", md: "calc(100% - 384px)" },
                mr: { md: "24px" },
              }}
            >
              {hospitals.length > 0 &&
                hospitals.map((hospital, index) => (
                  <HospitalCard
                    key={hospital["Hospital Name"] + index}
                    details={hospital}
                    availableSlots={availableSlots}
                    handleBooking={handleBookingModal}
                  />
                ))}

              {isLoading && (
                <Typography variant="h3" sx={{ bgcolor: "#fff", p: 3, borderRadius: 2 }}>
                  Loading...
                </Typography>
              )}

              {!state && (
                <Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 4, textAlign: 'center', border: '1px dashed #ced4da' }}>
                  <Typography variant="h4" sx={{ color: "primary.secondary", fontWeight: 600, mb: 1 }}>
                    Find the Best Healthcare Near You
                  </Typography>
                  <Typography color="text.secondary">
                    Please select a state and city in the search bar above to view available medical centers.
                  </Typography>
                </Box>
              )}
            </Stack>

            <Box sx={{ width: { xs: '100%', md: 360 }, flexShrink: 0 }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, overflow: 'hidden', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
                 <img 
                   src={ctaImage} 
                   alt="Ad Banner" 
                   style={{ width: '100%', height: 'auto', display: 'block' }}
                 />
              </Box>
            </Box>
          </Stack>
        </Container>

        <BookingModal
          open={isModalOpen}
          setOpen={setIsModalOpen}
          bookingDetails={bookingDetails}
          showSuccessMessage={setShowBookingSuccess}
        />

        <SnackbarAlert
          open={showBookingSuccess}
          setOpen={setShowBookingSuccess}
          message="Booking Successful"
        />
      </Box>
    </>
  );
}
