import {
  Box,
  Container,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

export function Navbar() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <Box sx={{ p: 1, bgcolor: "primary.main" }}>
        <Typography
          sx={{ fontSize: 14, textAlign: "center", color: "#fff" }}
        >
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </Typography>
      </Box>

      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Link to="/">
            <img src={logo} alt="Logo" height={27} />
          </Link>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{
              alignItems: { xs: "flex-start", md: "center" },
              pt: { xs: 12, md: 1 },
              pb: { xs: 4, md: 1 },
              px: { xs: 4, md: 0 },
            }}
            className={`${styles.navlinks} ${menuOpen ? styles.active : ""}`}
          >
            <Link to="/search" style={{ textDecoration: 'none', color: isMobile ? '#fff' : 'inherit' }}>Find Doctors</Link>
            <Link to="/search" style={{ textDecoration: 'none', color: isMobile ? '#fff' : 'inherit' }}>Hospitals</Link>
            <Link to="#" style={{ textDecoration: 'none', color: isMobile ? '#fff' : 'inherit' }}>Medicines</Link>
            <Link to="#" style={{ textDecoration: 'none', color: isMobile ? '#fff' : 'inherit' }}>Surgeries</Link>
            <Link to="#" style={{ textDecoration: 'none', color: isMobile ? '#fff' : 'inherit' }}>Software for Provider</Link>
            <Link to="#" style={{ textDecoration: 'none', color: isMobile ? '#fff' : 'inherit' }}>Facilities</Link>
            <Link to="/my-bookings">
              <Button variant="contained" disableElevation>
                My Bookings
              </Button>
            </Link>

            {isMobile && (
              <IconButton
                onClick={() => setMenuOpen(false)}
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 32,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </Stack>

          {isMobile && (
            <IconButton onClick={() => setMenuOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Stack>
      </Container>
    </header>
  );
}
