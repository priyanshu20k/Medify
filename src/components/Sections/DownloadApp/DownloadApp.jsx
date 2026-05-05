import mobile from "../../../assets/mobile.jpg";
import playstore from "../../../assets/playstore.png";
import apple from "../../../assets/apple-logo.png";
import arrow from "../../../assets/down-arr.png";
import { Box, Button, Container, Stack, Typography, Grid } from "@mui/material";
import { SmsForm } from "./SmsForm";

export function DownloadApp() {
  return (
    <Box
      sx={{ background: "linear-gradient(#E7F0FF 100%, #E8F1FF 47%)", pt: 5 }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 5 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box component="img" src={mobile} sx={{ width: 1, height: "auto" }} />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                position: "relative",
                pl: { xs: "36px", md: "50px" },
                mb: { xs: 4, md: 0 },
              }}
            >
              <Typography variant="h2" sx={{ mb: 2 }}>
                Download the
                <br />
                <Box component="span" sx={{ color: "primary.main" }}>
                  Medify{" "}
                </Box>
                App
              </Typography>

              <Box
                component="img"
                src={arrow}
                sx={{
                  width: { xs: 24, md: 40 },
                  position: "absolute",
                  left: 0,
                  top: 50,
                }}
              />

              <Box sx={{ mb: 4 }}>
                <SmsForm />
              </Box>

              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 1, md: 2 }}
              >
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                    '&:hover': { bgcolor: '#000' }
                  }}
                  size={"large"}
                  startIcon={<img src={playstore} height={24} alt="Play Store" />}
                  variant="contained"
                  disableElevation
                >
                  Google Play
                </Button>
                <Button
                  sx={{
                    bgcolor: "#333",
                    color: "#fff",
                    py: 1.5,
                    borderRadius: 1.5,
                    '&:hover': { bgcolor: '#000' }
                  }}
                  size="large"
                  startIcon={<img src={apple} height={24} alt="App Store" />}
                  variant="contained"
                  disableElevation
                >
                  App Store
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
