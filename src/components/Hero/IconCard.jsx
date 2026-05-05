import { Box, Stack, Typography } from "@mui/material";

export function IconCard({
  img,
  title,
  bgColor,
  active = false,
  shadow = false,
}) {
  return (
    <Stack
      sx={{
        spacing: 2,
        alignItems: "center",
        bgcolor: active ? "rgba(42, 167, 255, 0.08)" : bgColor,
        p: 3,
        borderRadius: 2,
        border: active ? "1px solid #2AA7FF" : "0",
        boxShadow: shadow ? "0 0 24px rgba(0,0,0,0.09)" : "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        height: "100%",
        "&:hover": {
          bgcolor: active ? "rgba(42, 167, 255, 0.1)" : "rgba(0,0,0,0.02)",
        },
      }}
    >
      <Box component="img" src={img} sx={{ height: 60, width: 60, objectFit: "contain" }} />
      <Typography
        sx={{
          color: active ? "primary.main" : "#ABB6C7",
          fontSize: 18,
          fontWeight: active ? 600 : 400,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}
