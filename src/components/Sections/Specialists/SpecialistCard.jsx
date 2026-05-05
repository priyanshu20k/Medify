import { Box, Typography } from "@mui/material";

export function SpecialistCard({ img, title, designation }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Box
        component="img"
        src={img}
        sx={{
          width: 1,
          boxShadow: "0 15px 55px -10px rgba(0,0,0,0.09)",
          borderRadius: "250px 240px 4px 4px",
          mb: 2
        }}
      />
      <Typography sx={{ fontSize: { xs: 16, md: 24 }, color: "#1B3C74" }}>
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 14, md: 16 },
          fontWeight: 500,
          color: "primary.main",
        }}
      >
        {designation}
      </Typography>
    </Box>
  );
}
