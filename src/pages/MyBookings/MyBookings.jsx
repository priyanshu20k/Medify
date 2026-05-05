import { Box, Typography, Container, Stack } from "@mui/material";
import { HospitalCard } from "../../components/HospitalCard/HospitalCard";
import { useEffect, useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Navbar } from "../../components/Navbar/Navbar";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const ctaImageUrl = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop";

  useEffect(() => {
    const localBookings = localStorage.getItem("medify_bookings") || "[]";
    const parsed = JSON.parse(localBookings);
    setBookings(parsed);
    setFilteredBookings(parsed);
  }, []);

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{ background: "linear-gradient(#EFF5FE, rgba(241,247,255,0.47))", pb: 10 }}
      >
        <Box
          sx={{
            position: "relative",
            background: "linear-gradient(90deg, #2AA7FF, #0C8CE5)",
            borderBottomLeftRadius: "1rem",
            borderBottomRightRadius: "1rem",
            height: { md: "110px" },
            mb: "50px",
            pt: { xs: 3, md: 1 },
          }}
        >
          <Container maxWidth="xl" sx={{ px: { xs: 2, md: 5 } }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 12 }}
              sx={{ alignItems: { xs: "center", md: "flex-end" } }}
            >
              <Typography
                component="h1"
                sx={{
                  pb: { md: 1 },
                  fontSize: { xs: 32, md: 40 },
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                My Bookings
              </Typography>
              <Box
                sx={{
                  bgcolor: "#fff",
                  p: 3,
                  flexGrow: 1,
                  borderRadius: 2,
                  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                  transform: { md: "translateY(50px)" },
                  width: { xs: "100%", md: "auto" },
                }}
              >
                <SearchBar list={bookings} filterList={setFilteredBookings} />
              </Box>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ pt: 8, px: { xs: 2, md: 4 } }}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} sx={{ alignItems: "flex-start" }}>
            <Stack
              spacing={3}
              sx={{ 
                width: { xs: "100%", md: "calc(100% - 384px)" },
                mb: { xs: 4, md: 0 }
              }}
            >
              {filteredBookings.length > 0 ? (
                filteredBookings.map((hospital, index) => (
                  <HospitalCard
                    key={hospital.id || index}
                    details={hospital}
                    availableSlots={{}}
                    handleBooking={() => {}}
                    booking={true}
                  />
                ))
              ) : (
                <Box sx={{ bgcolor: "#fff", p: 4, borderRadius: 4, textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ color: "primary.secondary", fontWeight: 600 }}>
                    No Bookings Found!
                  </Typography>
                </Box>
              )}
            </Stack>

            <Box sx={{ width: { xs: '100%', md: 360 }, flexShrink: 0 }}>
              <Box sx={{ bgcolor: '#fff', borderRadius: 4, overflow: 'hidden', boxShadow: '0 0 20px rgba(0,0,0,0.05)' }}>
                 <img 
                   src={ctaImageUrl} 
                   alt="Ad Banner" 
                   style={{ width: '100%', height: 'auto', display: 'block' }}
                 />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
