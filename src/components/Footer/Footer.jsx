import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import FooterLink from "./FooterLink";
import logo from "../../assets/logo.png";
import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import yt from "../../assets/yt.png";
import pinterest from "../../assets/pinterest.png";

export function Footer() {
  return (
    <Box sx={{ bgcolor: "#1B3C74", pb: 3, pt: 6 }}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 4, sm: 4, md: 2 }}
        >
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack
              sx={{
                alignItems: "flex-start",
                justifyContent: "space-between",
                height: 1,
              }}
            >
              <Box sx={{ mb: 2 }}>
                <Box component="img" src={logo} height={36} alt="Medify" sx={{ mb: 2 }} />
              </Box>
              <Stack direction="row" spacing={1.5} sx={{ mt: 'auto' }}>
                <Box component="img" src={fb} height={36} sx={{ cursor: "pointer" }} />
                <Box component="img" src={twitter} height={36} sx={{ cursor: "pointer" }} />
                <Box component="img" src={yt} height={36} sx={{ cursor: "pointer" }} />
                <Box component="img" src={pinterest} height={36} sx={{ cursor: "pointer" }} />
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack spacing={2}>
              <FooterLink>Orthology</FooterLink>
              <FooterLink>Neurology</FooterLink>
              <FooterLink>Dental Care</FooterLink>
              <FooterLink>Opthalmology</FooterLink>
              <FooterLink>Cardiology</FooterLink>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack spacing={2}>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Our Pricing</FooterLink>
              <FooterLink>Our Gallery</FooterLink>
              <FooterLink>Appointment</FooterLink>
              <FooterLink>Privacy Policy</FooterLink>
            </Stack>
          </Grid>
        </Grid>

        <Typography
          sx={{
            fontWeight: 300,
            color: "#fff",
            fontSize: 14,
            pt: 3,
            mt: 5,
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </Typography>
      </Container>
    </Box>
  );
}
