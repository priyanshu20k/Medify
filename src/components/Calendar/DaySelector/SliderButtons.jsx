import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Box } from "@mui/material";

function SlidePrevButton() {
  const swiper = useSwiper();
  return (
    <Box
      onClick={() => swiper.slidePrev()}
      sx={{
        cursor: "pointer",
        position: "absolute",
        left: 0,
        top: 0,
        height: 48,
        width: 48,
        bgcolor: "#fff",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "4px"
      }}
    >
      <ChevronLeft size={24} />
    </Box>
  );
}

function SlideNextButton() {
  const swiper = useSwiper();
  return (
    <Box
      onClick={() => swiper.slideNext()}
      sx={{
        cursor: "pointer",
        position: "absolute",
        right: 0,
        top: 0,
        height: 48,
        width: 48,
        bgcolor: "#fff",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "4px"
      }}
    >
      <ChevronRight size={24} />
    </Box>
  );
}

export { SlideNextButton, SlidePrevButton };
