import { Box, Container, Typography, Grid } from "@mui/material";
import banner from "../../../assets/our-families-banner.png";

export function OurFamilies() {
  return (
    <Box sx={{ pt: 3, background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 10 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Typography sx={{ fontWeight: 600, color: "primary.main" }}>
              CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
            </Typography>
            <Typography variant="h2">Our Families</Typography>
            <Typography sx={{ color: "#77829D", lineHeight: 1.8 }}>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </Typography>
          </Grid>

          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Box component="img" src={banner} sx={{ width: 1, height: "auto" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
