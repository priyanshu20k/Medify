import { Box, Container, Typography, Grid } from "@mui/material";
import faqBanner from "../../../assets/faqs-banner.jpg";
import { Accordion } from "../../Accordion/Accordion";

export function FAQs() {
  const faqs = [
    {
      question: "Why choose our medical for your family?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Why we are different from others?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "Trusted & experience senior care & love",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      question: "How to get appointment for emergency cases?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];

  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="xl">
        <Typography sx={{ color: "primary.main", fontWeight: 600, textAlign: "center" }}>
          Get Your Answer
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h2">
          Frequently Asked Questions
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 5 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box component="img" src={faqBanner} sx={{ width: 1, height: "auto" }} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ maxWidth: 450 }}>
              <Accordion data={faqs} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
