import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import banner from "../../../assets/patientcaring.png";
import tick from "../../../assets/tick-blue.png";

export function PatientCaring() {
  return (
    <Box sx={{ py: 6, background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 5 }}
          columns={{ xs: 4, sm: 8, md: 10 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Box component="img" src={banner} sx={{ width: 1, height: "auto" }} />
          </Grid>

          <Grid size={{ xs: 2, sm: 4, md: 5 }}>
            <Typography sx={{ fontWeight: 600, color: "primary.main" }}>
              HELPING PATIENTS FROM AROUND THE GLOBE!!
            </Typography>
            <Typography variant="h2" sx={{ mb: 1 }}>
              Patient{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Caring
              </Box>
            </Typography>
            <Typography sx={{ color: "#77829D", lineHeight: 1.8 }}>
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </Typography>

            <List sx={{ fontSize: { xs: 12, md: 18 } }}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} sx={{ height: 22, width: 22 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 500,
                        color: "#1B3C74",
                      }}
                    >
                      Stay Updated About Your Health
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} sx={{ height: 22, width: 22 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 500,
                        color: "#1B3C74",
                      }}
                    >
                      Check Your Results Online
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Box component="img" src={tick} sx={{ height: 22, width: 22 }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: { xs: 14, md: 18 },
                        fontWeight: 500,
                        color: "#1B3C74",
                      }}
                    >
                      Manage Your Appointments
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
