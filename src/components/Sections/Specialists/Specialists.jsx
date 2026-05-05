import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { SpecialistCard } from "./SpecialistCard";
import lesley from "../../../assets/lesley.png";
import ahmad from "../../../assets/ahmad.png";
import heena from "../../../assets/heena.png";
import ankur from "../../../assets/ankur.png";
import ahmadStevens from "../../../assets/ahmad-stevens.png";

export function Specialists() {
  const specialist_data = [
    { img: lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: ahmadStevens, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
    { img: ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
    { img: heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: ahmadStevens, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
  ];

  return (
    <Box sx={{ py: 4 }} id="find-doctors">
      <Typography variant="h2" sx={{ textAlign: "center", mb: 3, px: 2 }}>
        Our Medical Specialist
      </Typography>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          767: {
            slidesPerView: 4,
          },
        }}
      >
        {specialist_data.map((doc, index) => (
          <SwiperSlide key={index}>
            <SpecialistCard
              img={doc.img}
              title={doc.title}
              designation={doc.designation}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
