import { Box, Container, Typography, Grid } from "@mui/material";
import { BlogCard } from "./BlogCard";

export function Blogs() {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography sx={{ color: "primary.main", fontWeight: 600, textAlign: "center" }}>
          Blog & News
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h2">
          Read Our Latest News
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <BlogCard />
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <BlogCard />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
